import React, { FC, memo, useState } from 'react';
import { useSearchRepositoriesQuery, SearchRepositoriesQueryVariables } from '../client/gen/graphql-client-api';
import { PaginationButtons, Form, RepositoryCount, RepositoryList } from './index';
import { PER_PAGE } from '../constants';

export type AroundPageInfo = {
  hasNextPage: boolean | undefined;
  hasPreviousPage: boolean | undefined;
};

const INITIAL_VARIABLES: SearchRepositoriesQueryVariables = {
  first: PER_PAGE,
  last: null,
  before: null,
  after: null,
  query: '',
};

const View: FC = () => {
  const [searchVars, setSearchVars] = useState<SearchRepositoriesQueryVariables>(INITIAL_VARIABLES);
  const { data, error, loading } = useSearchRepositoriesQuery({
    variables: searchVars,
  });

  const { query } = searchVars;
  const search = data?.search;
  const repositoryCount = search?.repositoryCount;
  const edges = search?.edges;

  const hasPreviousPage = search?.pageInfo?.hasPreviousPage;
  const hasNextPage = search?.pageInfo?.hasNextPage;
  const AroundPageInfo: AroundPageInfo = {
    hasPreviousPage,
    hasNextPage,
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <>
      <Form variables={searchVars} setVariables={setSearchVars} />
      <RepositoryCount repositoryCount={repositoryCount} />
      <RepositoryList variables={searchVars} edges={edges} />
      {hasPreviousPage !== undefined || hasNextPage !== undefined ? (
        <PaginationButtons setVariables={setSearchVars} query={query} search={search} AroundPageInfo={AroundPageInfo} />
      ) : null}
    </>
  );
};

export default memo(View);
