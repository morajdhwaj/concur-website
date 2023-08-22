import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/products/ProductPage';
import SolutionPage from './pages/solutions';
import NavbarPage from './components/navbar/NavbarPage';
import { Content } from '@carbon/react';
import HomePage from './pages/ homePage';
import FooterPage from './components/footer';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarPage />
      <Content>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/solutions' element={<SolutionPage />} />
        </Routes>
      </Content>
      <FooterPage />
    </BrowserRouter>
  );
};

export default App;
