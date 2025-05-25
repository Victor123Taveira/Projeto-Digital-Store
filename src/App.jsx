import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductViewPage from './pages/ProductViewPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<ProductListingPage />} />
        <Route path="/produto/:id" element={<ProductViewPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
