import React, { Dispatch, FC, memo, SetStateAction, useCallback } from "react";
import { Search } from "./View";
import { Variables } from "../App";

type Props = {
  setVariables: Dispatch<SetStateAction<Variables>>;
  query: string;
  search: Search;
};

const NextButton: FC<Props> = ({ setVariables, query, search }) => {
  const goNext = useCallback(
    (search) => {
      setVariables({
        first: 5,
        after: search.pageInfo.endCursor,
        last: null,
        before: null,
        query,
      });
    },
    [setVariables, query]
  );

  return (
    <>
      <button onClick={() => goNext(search)}>Next</button>
    </>
  );
};

export default memo(NextButton);
