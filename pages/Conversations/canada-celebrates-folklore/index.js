import React from 'react';
import PageLayout from '../../../components/pageLayout/PageLayout';
import { folklore } from '../../../data/canadaCelebratesFolkloreData';

const CanadaCelebratesFolklore = () => {
  return (
    <>
      <PageLayout pageHeading={'Canada Celebrates Folklore ?'} pageData={folklore} />
    </>
  )
}

export default CanadaCelebratesFolklore
