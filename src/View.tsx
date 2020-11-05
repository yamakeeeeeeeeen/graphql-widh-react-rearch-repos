import React, { FC, useState } from "react";
import { useQuery } from "@apollo/client";
import { SEARCH_REPOSITORIES } from "./graphql";

type Variables = {
  first: number | null;
  last: number | null;
  before: number | null;
  after: number | null;
  query: string;
};

const VARIABLES: Variables = {
  first: 5,
  last: null,
  before: null,
  after: null,
  query: "フロントエンドエンジニア",
};

const View: FC = () => {
  const [searchVars] = useState<Variables>(VARIABLES); // TODO: イケてる書き方を探す
  const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, {
    variables: searchVars,
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
};

export default View;
