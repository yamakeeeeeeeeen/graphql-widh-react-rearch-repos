import React, { FC } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import View from "./View";

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <div>Hello, GraphQL</div>

      <View />
    </ApolloProvider>
  );
};

export default App;
