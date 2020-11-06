import React, { Dispatch, FC, memo, SetStateAction, useCallback } from 'react';
import { Search } from './View';
import { Variables } from '../App';
import { PER_PAGE } from '../constants';

type Props = {
  setVariables: Dispatch<SetStateAction<Variables>>;
  query: string;
  search: Search;
  disabled: boolean;
};

const NextButton: FC<Props> = ({ setVariables, query, search, disabled }) => {
  const goNext = useCallback(
    (search) => {
      setVariables({
        first: PER_PAGE,
        last: null,
        before: null,
        after: search.pageInfo.endCursor,
        query,
      });
    },
    [setVariables, query],
  );

  return (
    <>
      <button disabled={disabled} onClick={() => goNext(search)}>
        Next
      </button>
    </>
  );
};

export default memo(NextButton);
