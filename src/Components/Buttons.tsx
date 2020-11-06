import React, { Dispatch, FC, memo, SetStateAction } from "react";
import { NextButton, PreviousButton } from "./index";
import { Search, AroundPageInfo } from "./View";
import { Variables } from "../App";

type Props = {
  setVariables: Dispatch<SetStateAction<Variables>>;
  query: string;
  search: Search;
  AroundPageInfo: AroundPageInfo;
};

const Buttons: FC<Props> = ({
  setVariables,
  query,
  search,
  AroundPageInfo,
}) => {
  const { hasPreviousPage, hasNextPage } = AroundPageInfo;

  return (
    <>
      <PreviousButton
        setVariables={setVariables}
        query={query}
        search={search}
        disabled={!hasPreviousPage}
      />
      <NextButton
        setVariables={setVariables}
        query={query}
        search={search}
        disabled={!hasNextPage}
      />
    </>
  );
};

export default memo(Buttons);
