import React, { FC, memo, useMemo } from 'react';

type Props = {
  repositoryCount: number;
};

const RepositoryCount: FC<Props> = ({ repositoryCount }) => {
  const repositoryUnit = useMemo(() => (repositoryCount === 1 ? 'Repository' : 'Repositories'), [repositoryCount]);
  const title = useMemo(() => `GitHub Repositories Search Results - ${repositoryCount} ${repositoryUnit}`, [
    repositoryCount,
    repositoryUnit,
  ]);

  return <h2>{title}</h2>;
};

export default memo(RepositoryCount);
