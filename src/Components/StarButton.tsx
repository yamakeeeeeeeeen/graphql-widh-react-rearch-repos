import React, { FC, memo, useMemo } from "react";
import { useMutation } from "@apollo/client";
import { Node } from "./RepositoryList";
import { ADD_STAR } from "../graphql";

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
  const [addStar] = useMutation(ADD_STAR, {
    variables: {
      input: {
        starrableId: node.id,
      },
    },
  });

  return (
    <>
      <button onClick={() => addStar()}>
        {starCount} | {viewerHasStarred ? "starred" : "-"}
      </button>
    </>
  );
};

export default memo(StarButton);
