import React, { Dispatch, FC, memo, SetStateAction } from "react";
import { useQuery } from "@apollo/client";
import { Variables } from "../App";
import { Buttons, RepositoryCount, RepositoryList } from "./index";
import { SEARCH_REPOSITORIES } from "../graphql";

type Props = {
  variables: Variables;
  setVariables: Dispatch<SetStateAction<Variables>>;
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

const View: FC<Props> = ({ variables, setVariables }) => {
  const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, {
    variables,
  });
  const { query } = variables;
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
      <RepositoryCount repositoryCount={search.repositoryCount} />
      <RepositoryList variables={variables} edges={search.edges} />
      {hasPreviousPage !== undefined || hasNextPage !== undefined ? (
        <Buttons
          setVariables={setVariables}
          query={query}
          search={search}
          AroundPageInfo={AroundPageInfo}
        />
      ) : null}
    </>
  );
};

export default memo(View);
