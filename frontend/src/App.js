import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from '@apollo/client'
import Booklist from './components/Booklist'

// ............... APOLLO SETUP .............
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()

})

// fake queyr search to
client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));


const App = () => {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1> Krish Book List</h1>
        <Booklist />
      </div>
    </ApolloProvider>

  );
}

export default App;
