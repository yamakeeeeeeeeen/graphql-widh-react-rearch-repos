import React, { FC, memo } from "react";

type Props = {
  edges: any[];
};

const SearchResults: FC<Props> = ({ edges }) => (
  <ul>
    {edges.map((edge: any) => {
      const node = edge.node;
      return (
        <li key={node.id}>
          <a href={node.url} target="_blank" rel="noreferrer noopener">
            {node.name}
          </a>
        </li>
      );
    })}
  </ul>
);

export default memo(SearchResults);
