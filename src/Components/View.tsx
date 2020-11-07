import React, { FC, memo, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Buttons, Form, RepositoryCount, RepositoryList } from './index';
import { SEARCH_REPOSITORIES } from '../graphql';
import { PER_PAGE } from '../constants';

export type Variables = {
  first: number | null;
  last: number | null;
  before: number | null;
  after: number | null;
  query: string;
};
export type Search = {
  edges: any[];
  pageInfo: {
    __typename: string;
    endCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
  };
  repositoryCount: number;
  __typename: string;
};
export type AroundPageInfo = {
  hasNextPage: boolean | undefined;
  hasPreviousPage: boolean | undefined;
};

const VARIABLES: Variables = {
  first: PER_PAGE,
  last: null,
  before: null,
  after: null,
  query: '',
};

const View: FC = () => {
  const [searchVars, setSearchVars] = useState<Variables>(VARIABLES);
  const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, {
    variables: searchVars,
  });
  const { query } = searchVars;
  const search: Search = data?.search;

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
      <RepositoryCount repositoryCount={search.repositoryCount} />
      <RepositoryList variables={searchVars} edges={search.edges} />
      {hasPreviousPage !== undefined || hasNextPage !== undefined ? (
        <Buttons setVariables={setSearchVars} query={query} search={search} AroundPageInfo={AroundPageInfo} />
      ) : null}
    </>
  );
};

export default memo(View);
