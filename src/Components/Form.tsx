import React, { createRef, Dispatch, FC, SetStateAction } from 'react';
import { SearchRepositoriesQueryVariables } from '../client/gen/graphql-client-api';

type Props = {
  variables: SearchRepositoriesQueryVariables;
  setVariables: Dispatch<SetStateAction<SearchRepositoriesQueryVariables>>;
};

const Form: FC<Props> = ({ variables, setVariables }) => {
  const formRef = createRef<any>();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setVariables({
      ...variables,
      query: formRef.current.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={formRef} />
      <input value="Search" type="submit" />
    </form>
  );
};

export default Form;
