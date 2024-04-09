// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './apolloClient'; // Ensure this points to your Apollo Client setup file

import './App.css';

import Navbar from './components/Navbar';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<SearchBooks />} />
          <Route path='/saved' element={<SavedBooks />} />
          <Route path='*' element={<h1 className='display-2'>Wrong page!</h1>} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
