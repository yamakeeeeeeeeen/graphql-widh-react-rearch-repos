import React, { FC } from "react";
import { useQuery } from "@apollo/client";
import { ME } from "./graphql";

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
