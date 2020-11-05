import { gql } from "@apollo/client";

const ME = gql`
  query me {
    user(login: "yamakeeeeeeeeen") {
      bio
      avatarUrl
    }
  }
`;

const SEARCH_REPOSITORIES = gql`
  query searhRepositories(
    $first: Int
    $after: String
    $last: Int
    $before: String
    $query: String!
  ) {
    search(
      first: $first
      after: $after
      last: $last
      before: $before
      query: $query
      type: REPOSITORY
    ) {
      repositoryCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ... on Repository {
            id
            name
            url
            stargazers {
              totalCount
            }
            viewerHasStarred
          }
        }
      }
    }
  }
`;

export { SEARCH_REPOSITORIES, ME };
