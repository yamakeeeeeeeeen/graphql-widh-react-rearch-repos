import React, { FC, memo } from 'react';
import { StarButton } from './index';
import { SearchRepositoriesQueryVariables } from '../client/gen/graphql-client-api';
import { Edges } from '../@types/graphql';

type Props = {
  variables: SearchRepositoriesQueryVariables;
  edges: Edges;
};

const RepositoryList: FC<Props> = ({ variables, edges }) => (
  <ul>
    {edges
      ? edges.map((edge) => {
          const node = edge?.node;

          // TODO: もっとイケてる型にしたい
          if (node?.__typename === 'Repository') {
            return (
              <li key={node.id}>
                <a href={node.url} target="_blank" rel="noreferrer noopener">
                  {node.name}
                </a>
                -
                <StarButton variables={variables} node={node} />
              </li>
            );
          }
          return null;
        })
      : null}
  </ul>
);

export default memo(RepositoryList);
