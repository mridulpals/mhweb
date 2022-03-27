import React from 'react';
import { meetTheSpeakers } from '../../../data/mindfulModernismData';
import MeetTheSpeakersLayout from '../../../components/meetTheSpeakersLayout/MeetTheSpeakersLayout';

const MeetTheSpeakers = () => {
  return (
    <MeetTheSpeakersLayout pageData={meetTheSpeakers} />
  )
}

export default MeetTheSpeakers
