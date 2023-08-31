import React from 'react';
import './_report.scss';
import ReportHero from '../../components/Report-components/ReportHero';
import ReportSummary from '../../components/Report-components/ReportSummary';

const ReportPage = () => {
  return (
    <div className='report-page'>
      <ReportHero />
      <ReportSummary />
    </div>
  );
};

export default ReportPage;
