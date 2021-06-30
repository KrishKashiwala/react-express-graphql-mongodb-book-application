import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client'
import Booklist from './components/Booklist'
import Addbook from './components/Addbook';

// ............... APOLLO SETUP .............
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql/',
  cache: new InMemoryCache(),
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }

})


const App = () => {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1> Krish Book List</h1>
        <Booklist />
        <Addbook />
      </div>
    </ApolloProvider>

  );
}

export default App;
