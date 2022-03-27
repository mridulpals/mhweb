import React from 'react';
import styles from './meetTheSpeakersLayout.module.css'

const SpeakerCard = ({ cardData, ...rest }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <img src="" alt="" />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.heading}>{cardData.name}</h3>
          <p className={styles.date}>Posted: {cardData.date}</p>
          <div className={styles.description} dangerouslySetInnerHTML={{ __html: cardData.description }} />
        </div>
      </div>
      <div className={styles.readMore}>
        <button className={styles.readMoreBtn}>Read more</button>
      </div>
    </div>
  )
}

export default SpeakerCard
