import React, { FC, memo, useMemo } from "react";
import { useMutation } from "@apollo/client";
import { Node } from "./RepositoryList";
import { Variables } from "../App";
import { ADD_STAR, REMOVE_STAR, SEARCH_REPOSITORIES } from "../graphql";

type Props = {
  variables: Variables;
  node: Node;
};

const StarButton: FC<Props> = ({ variables, node }) => {
  const totalCount = node.stargazers.totalCount;
  const viewerHasStarred = node.viewerHasStarred;
  const starCount = useMemo(
    () => (totalCount === 1 ? "1 star" : `${totalCount} stars`),
    [totalCount]
  );
  const ADD_OR_REMOVE_STAR = useMemo(
    () => (viewerHasStarred ? REMOVE_STAR : ADD_STAR),
    [viewerHasStarred]
  );
  const [addOrRemoveStar] = useMutation(ADD_OR_REMOVE_STAR, {
    variables: {
      input: {
        starrableId: node.id,
      },
    },
    refetchQueries: [
      {
        query: SEARCH_REPOSITORIES,
        variables,
      },
    ],
  });

  return (
    <>
      <button onClick={() => addOrRemoveStar()}>
        {starCount} | {viewerHasStarred ? "starred" : "-"}
      </button>
    </>
  );
};

export default memo(StarButton);
