import React, { FC, memo } from "react";
import { Node } from "./RepositoryList";

type Props = {
  node: Node;
};

const StarButton: FC<Props> = ({ node }) => {
  const totalCount = node.stargazers.totalCount;

  return (
    <>
      <button>{totalCount === 1 ? "1 star" : `${totalCount} stars`}</button>
    </>
  );
};

export default memo(StarButton);
