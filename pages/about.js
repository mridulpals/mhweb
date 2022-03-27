import React from 'react';
import PageLayout from '../components/pageLayout/PageLayout';// Data
import { aboutUsdata } from '../data/aboutusPage';

const about = () => {

  return (
    <>
      <PageLayout pageData={aboutUsdata} pageType={'aboutus'} pageHeading={'About Us'} />
    </>
  )
}

export default about
