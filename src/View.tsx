import React, { FC, memo } from "react";
import { useQuery } from "@apollo/client";
import { SEARCH_REPOSITORIES } from "./graphql";
import { Variables } from "./App";
import { RepositoryCount } from "./Components";

type Props = {
  variables: Variables;
};

const View: FC<Props> = ({ variables }) => {
  const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, {
    variables,
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <>
      <RepositoryCount repositoryCount={data.search.repositoryCount} />
    </>
  );
};

export default memo(View);
