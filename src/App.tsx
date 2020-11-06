import React, { createRef, FC, useState } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import { View } from "./Components";
import { PER_PAGE } from "./constants";

export type Variables = {
  first: number | null;
  last: number | null;
  before: number | null;
  after: number | null;
  query: string;
};

const VARIABLES: Variables = {
  first: PER_PAGE,
  last: null,
  before: null,
  after: null,
  query: "",
};

const App: FC = () => {
  const [searchVars, setSearchVars] = useState<Variables>(VARIABLES);
  const formRef = createRef<any>();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSearchVars({
      ...searchVars,
      query: formRef.current.value,
    });
  };

  return (
    <ApolloProvider client={client}>
      <form onSubmit={handleSubmit}>
        <input ref={formRef} />
        <input value="Search" type="submit" />
      </form>
      <View variables={searchVars} setVariables={setSearchVars} />
    </ApolloProvider>
  );
};

export default App;
