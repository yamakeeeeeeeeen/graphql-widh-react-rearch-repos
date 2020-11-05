import React from "react";
import { gql, useQuery } from "@apollo/client";

const ME = gql`
  query me {
    user(login: "yamakeeeeeeeeen") {
      bio
      avatarUrl
    }
  }
`;

const View = () => {
  const { loading, error, data } = useQuery(ME);

  if (loading) return <div>Loding...</div>;
  if (error) return <div>Error! {error.message}</div>;

  return <div>{data ? <div>{data.user.bio}</div> : null}</div>;
};

export default View;
