import React, { FC, memo } from 'react';
import { StarButton } from './index';
import { Variables } from '../App';

type Props = {
  variables: Variables;
  edges: any[];
};
export type Node = {
  id: string;
  name: string;
  stargazers: {
    totalCount: number;
    __typename: string;
  };
  url: string;
  viewerHasStarred: boolean;
  __typename: string;
};

const RepositoryList: FC<Props> = ({ variables, edges }) => (
  <ul>
    {edges.map((edge: any) => {
      const node: Node = edge.node;
      return (
        <li key={node.id}>
          <a href={node.url} target="_blank" rel="noreferrer noopener">
            {node.name}
          </a>
          -
          <StarButton variables={variables} node={node} />
        </li>
      );
    })}
  </ul>
);

export default memo(RepositoryList);
