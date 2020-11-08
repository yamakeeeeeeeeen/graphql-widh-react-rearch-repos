import React, { FC, memo, useMemo } from 'react';
import { useMutation } from '@apollo/react-hooks';
import {
  AddStarDocument,
  RemoveStarDocument,
  SearchRepositoriesDocument,
  SearchRepositoriesQueryVariables,
} from '../../client/gen/graphql-client-api';
import { RepositoryTypeNode } from '../../@types/graphql';

type Props = {
  variables: SearchRepositoriesQueryVariables;
  node: RepositoryTypeNode; // TODO: 型修正
};

const StarButton: FC<Props> = ({ variables, node }) => {
  const totalCount = node.stargazers.totalCount;
  const viewerHasStarred = node.viewerHasStarred;
  const starCount = useMemo<string>(() => (totalCount === 1 ? '1 star' : `${totalCount} stars`), [totalCount]);

  const AddOrRemoveStarDocument = useMemo(() => (viewerHasStarred ? RemoveStarDocument : AddStarDocument), [
    viewerHasStarred,
  ]);
  const [addOrRemoveStar] = useMutation(AddOrRemoveStarDocument, {
    variables: {
      input: {
        starrableId: node.id,
      },
    },
    // NOTE: キャッシュを書き換えるパターン
    update: (cache, { data: { addStar, removeStar } }) => {
      const { starrable } = addStar || removeStar;
      // NOTE: dataに入っているのはInMemoryCacheでキャッシュされたデータ
      const data: any = cache.readQuery({
        query: SearchRepositoriesDocument,
        variables,
      });
      const edges = data.search.edges;
      const newEdges = edges.map((edge: any) => {
        let newEdge = { ...edge };

        if (newEdge.node.id === node.id) {
          const totalCount = newEdge.node.stargazers.totalCount;
          const diff = starrable.viewerHasStarred ? 1 : -1;

          newEdge = {
            node: {
              ...edge.node,
              stargazers: {
                ...edge.node.stargazers,
                totalCount: totalCount + diff,
              },
            },
          };
        }
        return newEdge;
      });

      const newData = {
        search: {
          ...data.search,
          edges: [...newEdges],
        },
      };

      cache.writeQuery({
        query: SearchRepositoriesDocument,
        data: newData,
      });
    },

    // NOTE: refetchするパターン
    refetchQueries: [
      {
        query: SearchRepositoriesDocument,
        variables,
      },
    ],
  });

  return (
    <>
      <button onClick={() => addOrRemoveStar()}>
        {starCount} | {viewerHasStarred ? 'starred' : '-'}
      </button>
    </>
  );
};

export default memo(StarButton);
