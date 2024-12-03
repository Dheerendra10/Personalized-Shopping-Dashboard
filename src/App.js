
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
import Product from './components/Product';
// import Cart from './components/Cart';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={< Product/>} />
      </Routes>
    </Router>
  );
}

export default
 App;

