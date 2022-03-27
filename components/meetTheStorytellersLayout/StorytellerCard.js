import React from 'react';
import styles from './meetTheStorytellersLayout.module.css'

const StorytellerCard = ({ name, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={image} alt="" />
      </div>
      <div className={styles.nameContainer}>
        <p className={styles.cardName}>{name}</p>
      </div>
    </div>
  )
}

export default StorytellerCard
