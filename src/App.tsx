import React from "react";
// import { ApolloProvider } from "react-apollo";
// import gql from "graphql-tag";
import { ApolloProvider } from "@apollo/react-hooks";
import { useQuery } from "@apollo/client";
import { Query } from "react-apollo";
import client from "./client";
import View from "./View";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>Hello, GraphQL</div>

      <View />
    </ApolloProvider>
  );
};

export default App;
