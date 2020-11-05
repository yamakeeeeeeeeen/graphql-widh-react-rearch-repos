import { gql } from "@apollo/client";

const ME = gql`
  query me {
    user(login: "yamakeeeeeeeeen") {
      bio
      avatarUrl
    }
  }
`;

export { ME };
