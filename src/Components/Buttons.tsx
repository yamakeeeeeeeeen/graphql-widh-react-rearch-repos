import React, { Dispatch, FC, memo, SetStateAction } from "react";
import { NextButton } from "./index";
import { Search } from "./View";
import { Variables } from "../App";

type Props = {
  setVariables: Dispatch<SetStateAction<Variables>>;
  query: string;
  search: Search;
  hasNextPage: boolean;
};

const Buttons: FC<Props> = ({ setVariables, query, search, hasNextPage }) => {
  return (
    <>
      {hasNextPage ? (
        <NextButton setVariables={setVariables} query={query} search={search} />
      ) : null}
    </>
  );
};

export default memo(Buttons);
