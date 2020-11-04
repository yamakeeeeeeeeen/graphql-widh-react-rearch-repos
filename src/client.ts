import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const headersLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  });
  return forward(operation);
});

const endpoint = "https://api.github.com/graphql";
const httpLink = new HttpLink({ uri: endpoint });
const link = ApolloLink.from([headersLink, httpLink]);
const cache = new InMemoryCache();

export default new ApolloClient({
  link,
  cache,
});