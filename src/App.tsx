import React, { FC, useCallback, useState } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import { View } from "./Components";

export type Variables = {
  first: number | null;
  last: number | null;
  before: number | null;
  after: number | null;
  query: string;
};

const PER_PAGE = 5;
const VARIABLES: Variables = {
  first: PER_PAGE,
  last: null,
  before: null,
  after: null,
  query: "フロントエンドエンジニア",
};

const App: FC = () => {
  const [searchVars, setSearchVars] = useState<Variables>(VARIABLES);
  const { query } = searchVars;

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  const handleChange = useCallback(
    (event) => {
      setSearchVars({
        ...searchVars,
        query: event.target.value,
      });
    },
    [searchVars, setSearchVars]
  );

  return (
    <ApolloProvider client={client}>
      <form onSubmit={handleSubmit}>
        <input value={query} onChange={handleChange} />
      </form>
      <View variables={searchVars} setVariables={setSearchVars} />
    </ApolloProvider>
  );
};

export default App;
