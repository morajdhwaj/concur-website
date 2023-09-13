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
import Consumer from './pages/solutions/solutions-pages/Consumer';
import Healthcare from './pages/solutions/solutions-pages/Healthcare';
import Fintech from './pages/solutions/solutions-pages/Fintech';
import StartUps from './pages/solutions/solutions-pages/StartUps';
import Media from './pages/solutions/solutions-pages/Media';
import ECommerce from './pages/solutions/solutions-pages/E-commerce';
import B2B from './pages/solutions/solutions-pages/B2B';
import B2C from './pages/solutions/solutions-pages/B2C';
import AboutUs from './components/navbar/navbar-pages/AboutUs';
import B2G from './pages/solutions/solutions-pages/B2G';
import Team from './components/navbar/navbar-pages/Team';
import Technology from './components/navbar/navbar-pages/Technology';
import Security from './components/navbar/navbar-pages/Security';
import Certifications from './components/navbar/navbar-pages/Certifications';
import Press from './components/navbar/navbar-pages/Press';
import OpenSource from './components/navbar/navbar-pages/OpenSource';
import ContactUs from './components/navbar/navbar-pages/ContactUs';
import TOS from './components/navbar/navbar-pages/TOS';
import GDPR from './components/navbar/navbar-pages/GDPR';
import DataPolicy from './components/navbar/navbar-pages/DataPolicy';
import Disclosure from './components/navbar/navbar-pages/Disclosure';
import LGPDBrazil from './pages/solutions/solutions-pages/LGPDBrazil';
import PDPLSouthArabia from './pages/solutions/solutions-pages/PDPLSouthArabia';

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
          <Route path='/products' element={<ProductPage />} />
          <Route path='/solutions/consumer' element={<Consumer />} />
          <Route path='/solutions/healthcare' element={<Healthcare />} />
          <Route path='/solutions/Fintech' element={<Fintech />} />
          <Route path='/solutions/Startups' element={<StartUps />} />
          <Route path='/solutions/media' element={<Media />} />
          <Route path='/solutions/e-commerce' element={<ECommerce />} />
          <Route path='/solutions/b2b' element={<B2B />} />
          <Route path='/solutions/b2c' element={<B2C />} />
          <Route path='/solutions/b2g' element={<B2G />} />
          <Route path='/solutions/lgpd-brazil' element={<LGPDBrazil />} />
          <Route
            path='/solutions/pdpl-south-arabia'
            element={<PDPLSouthArabia />}
          />
          <Route path='/company/about-us' element={<AboutUs />} />
          <Route path='/company/team' element={<Team />} />
          <Route path='/company/technology' element={<Technology />} />
          <Route path='/company/security' element={<Security />} />
          <Route path='/company/certifications' element={<Certifications />} />
          <Route path='/company/press' element={<Press />} />
          <Route path='/company/open-source' element={<OpenSource />} />
          <Route path='/company/contact-us' element={<ContactUs />} />
          <Route path='/legal/term-of-service' element={<TOS />} />
          <Route path='/legal/gdpr' element={<GDPR />} />
          <Route path='/legal/data-policy' element={<DataPolicy />} />
          <Route path='/legal/disclosure' element={<Disclosure />} />
        </Routes>
      </Content>
      <FooterPage />
    </BrowserRouter>
  );
};

export default App;
