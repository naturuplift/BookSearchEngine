import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider , createHttpLink } from '@apollo/client';
import './App.css';
import { setContext } from '@apollo/client/link/context';
// Import component
import Navbar from './components/Navbar';


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

// instance for Apollo client
const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

// Construct main GraphQL API endpoint
function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
