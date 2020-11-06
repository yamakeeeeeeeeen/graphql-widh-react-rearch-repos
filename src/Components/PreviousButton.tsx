import React, { Dispatch, FC, memo, SetStateAction, useCallback } from 'react';
import { PER_PAGE } from '../constants';
import { Variables } from './View';
import { Search } from './View';

type Props = {
  setVariables: Dispatch<SetStateAction<Variables>>;
  query: string;
  search: Search;
  disabled: boolean;
};

const PreviousButton: FC<Props> = ({ setVariables, query, search, disabled }) => {
  const goPrevious = useCallback(
    (search) => {
      setVariables({
        first: null,
        last: PER_PAGE,
        before: search.pageInfo.startCursor,
        after: null,
        query,
      });
    },
    [setVariables, query],
  );

  return (
    <>
      <button disabled={disabled} onClick={() => goPrevious(search)}>
        Previous
      </button>
    </>
  );
};

export default memo(PreviousButton);
