import { ApolloClient, InMemoryCache } from "@apollo/client";

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const END_POINT = process.env.REACT_APP_END_POINT;
const cache = new InMemoryCache();

// GraphQL クライアントを生成
export default new ApolloClient({
  uri: END_POINT,
  headers: { authorization: `Bearer ${GITHUB_TOKEN}` },
  cache,
});
