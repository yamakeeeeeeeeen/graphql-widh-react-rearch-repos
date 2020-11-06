import React, { Dispatch, FC, memo, SetStateAction } from "react";
import { useQuery } from "@apollo/client";
import { SEARCH_REPOSITORIES } from "../graphql";
import { Variables } from "../App";
import { Buttons, RepositoryCount, RepositoryList } from "./index";

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

const View: FC<Props> = ({ variables, setVariables }) => {
  const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, {
    variables,
  });
  const { query } = variables;
  const search: Search = data?.search;
  const hasNextPage = search?.pageInfo?.hasNextPage;

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <>
      <RepositoryCount repositoryCount={search.repositoryCount} />
      <RepositoryList edges={search.edges} />
      {hasNextPage !== undefined ? (
        <Buttons
          setVariables={setVariables}
          query={query}
          search={search}
          hasNextPage={hasNextPage}
        />
      ) : null}
    </>
  );
};

export default memo(View);
