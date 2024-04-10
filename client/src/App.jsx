// import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider , createHttpLink } from '@apollo/client';
import './App.css';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';
// Import component
import Navbar from './components/Navbar';

// Construct  main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // Get authentication token
  const token = localStorage.getItem('id_token');
  // Return headers
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// instance for Apollo client
const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

// Construct main GraphQL API endpoint
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Navbar />
        <Outlet />
      </ApolloProvider>
    </>
  );
}

export default App;