import React from 'react';
import PageHeading from '../pageHeading/PageHeading';
import SpeakerCard from './SpeakerCard';
import styles from './meetTheSpeakersLayout.module.css';

const MeetTheSpeakersLayout = (props) => {

  const { pageHeading, speakers } = props.pageData

  return (
    <>
      <PageHeading pageHeading={pageHeading} />
      <div className={styles.cardContainer + ' mainLayout'}>
        {speakers.length > 0 &&
          speakers.map((speaker, i) =>
            <SpeakerCard cardData={speaker} key={i} />
          )
        }
      </div>
    </>
  )
}

export default MeetTheSpeakersLayout