import React, { FC, memo, useMemo } from "react";
import { useMutation } from "@apollo/client";
import { Node } from "./RepositoryList";
import { ADD_STAR, REMOVE_STAR } from "../graphql";

type Props = {
  node: Node;
};

const StarButton: FC<Props> = ({ node }) => {
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
