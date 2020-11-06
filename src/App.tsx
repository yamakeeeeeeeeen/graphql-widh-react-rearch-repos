import React, { FC } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './client';
import { View } from './Components';

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <View />
    </ApolloProvider>
  );
};

export default App;
