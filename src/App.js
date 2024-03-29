import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import ProductDetails from './pages/ProductDetails';
import ProductList from './pages/ProductList';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" exact element={<Home />} ></Route>
          <Route path="/product" exact element={<ProductDetails />} ></Route>
          <Route path="/products" exact element={<ProductList />} ></Route>
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
