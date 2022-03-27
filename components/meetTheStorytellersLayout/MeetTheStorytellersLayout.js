import React from 'react';
import PageHeading from '../pageHeading/PageHeading';
import StorytellerCard from './StorytellerCard';
import styles from './meetTheStorytellersLayout.module.css'

const MeetTheStorytellersLayout = (props) => {
  return (
    <>
      <PageHeading pageHeading={'Meet the Storytellers'} />
      <div className={styles.pageContainer + ' mainLayout'}>
        {
          props.data.map((card, i) =>
            <StorytellerCard name={card.name} image={card.image} key={i} />
          )
        }
      </div>
    </>
  )
}

export default MeetTheStorytellersLayout
