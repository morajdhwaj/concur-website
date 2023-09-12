import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/products/ProductPage';
import SolutionPage from './pages/solutions';
import NavbarPage from './components/navbar/NavbarPage';
import { Content } from '@carbon/react';
import HomePage from './pages/ homePage';
import FooterPage from './components/footer';
import ReportPage from './pages/report';
import JobPage from './pages/job-page';
import JobDetails from './pages/job-details';
import Services from './pages/services';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarPage />
      <Content>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/solutions' element={<SolutionPage />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/report' element={<ReportPage />} />
          <Route path='/jobs' element={<JobPage />} />
          <Route path='/job-details' element={<JobDetails />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </Content>
      <FooterPage />
    </BrowserRouter>
  );
};

export default App;
