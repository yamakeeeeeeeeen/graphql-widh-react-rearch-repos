import React, { FC } from "react";
import { gql, useQuery } from "@apollo/client";

const ME = gql`
  query me {
    user(login: "yamakeeeeeeeeen") {
      bio
      avatarUrl
    }
  }
`;

const View: FC = () => {
  const { loading, error, data } = useQuery(ME);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return <div>{data ? <>{data.user.bio}</> : null}</div>;
};

export default View;
