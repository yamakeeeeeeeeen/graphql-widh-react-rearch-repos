import React, { FC, memo } from "react";
import { useQuery } from "@apollo/client";
import { SEARCH_REPOSITORIES } from "./graphql";
import { Variables } from "./App";
import { RepositoryCount, SearchResults } from "./Components";

type Props = {
  variables: Variables;
};

const View: FC<Props> = ({ variables }) => {
  const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, {
    variables,
  });
  const search = data?.search;

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <>
      <RepositoryCount repositoryCount={search.repositoryCount} />
      <SearchResults edges={search.edges} />
    </>
  );
};

export default memo(View);
