import React, { Dispatch, FC, memo, SetStateAction } from 'react';
import { NextButton, PreviousButton } from '../index';
import { AroundPageInfo } from '../View';
import { SearchRepositoriesQueryVariables } from '../../client/gen/graphql-client-api';
import { Search } from '../../@types/graphql';

type Props = {
  setVariables: Dispatch<SetStateAction<SearchRepositoriesQueryVariables>>;
  query: string;
  search: Search;
  AroundPageInfo: AroundPageInfo;
};

const PaginationButtons: FC<Props> = ({ setVariables, query, search, AroundPageInfo }) => {
  const { hasPreviousPage, hasNextPage } = AroundPageInfo;

  return (
    <>
      <PreviousButton setVariables={setVariables} query={query} search={search} disabled={!hasPreviousPage} />
      <NextButton setVariables={setVariables} query={query} search={search} disabled={!hasNextPage} />
    </>
  );
};

export default memo(PaginationButtons);
