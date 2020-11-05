import { ApolloClient, InMemoryCache } from "@apollo/client";

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const endpoint = "https://api.github.com/graphql";
const cache = new InMemoryCache();

// GraphQL クライアントを生成
export default new ApolloClient({
  uri: endpoint,
  headers: { authorization: `Bearer ${GITHUB_TOKEN}` },
  cache,
});

// import { ApolloClient } from "apollo-client";
// import { ApolloLink } from "apollo-link";
// import { HttpLink } from "apollo-link-http";
// import { InMemoryCache } from "apollo-cache-inmemory";

// const headersLink = new ApolloLink((operation, forward) => {
//   operation.setContext({
//     headers: {
//       authorization: `Bearer ${GITHUB_TOKEN}`,
//     },
//   });
//   return forward(operation);
// });

// const httpLink = new HttpLink({ uri: endpoint });
// const link = ApolloLink.from([headersLink, httpLink]);
//
// export default new ApolloClient({
//   link: link as any, // NOTE: anyにしないとエラーが出る https://github.com/jaydenseric/apollo-upload-client/issues/213#issuecomment-693268377
//   cache,
// });
