import React from "react";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import client from "./client";

const ME = gql`
  query me {
    user(login: "yamakeeeeeeeeen") {
      name
      avatarUrl
    }
  }
`;

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>Hello, GraphQL</div>

      <Query query={ME}>
        {({ loding, error, data }) => {
          if (loding) {
            return <div>Loding...</div>;
          }
          if (error) {
            return <div>Error! {error.message}</div>;
          }

          return <div>{data.user.name}</div>;
        }}
      </Query>
    </ApolloProvider>
  );
};

export default App;
