import React, { FC, memo } from "react";
import { Node } from "./RepositoryList";

type Props = {
  node: Node;
};

const StarButton: FC<Props> = ({ node }) => {
  const totalCount = node.stargazers.totalCount;
  const viewerHasStarred = node.viewerHasStarred;
  const starCount = totalCount === 1 ? "1 star" : `${totalCount} stars`;

  return (
    <>
      <button>
        {starCount} | {viewerHasStarred ? "starred" : "-"}
      </button>
    </>
  );
};

export default memo(StarButton);
