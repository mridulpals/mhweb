import React from 'react';
import { meetTheStorytellers } from '../../../data/canadaCelebratesFolkloreData'
import MeetTheStorytellersLayout from '../../../components/meetTheStorytellersLayout/MeetTheStorytellersLayout';

const MeetTheStorytellers = () => {
  return (
    <>
      <MeetTheStorytellersLayout data={meetTheStorytellers} />
    </>
  )
}

export default MeetTheStorytellers
