import React from 'react';
import InfoCards from '../InfoCards/InfoCards';
import styles from './sectionFull.module.css';

const SectionFull = (props) => {

  const { heading, bottomText, cardData } = props

  return (
    <div className={styles.fullSecWrapper}>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.cardsContainer + ' mainLayout'}>
        {
          cardData.map((data, i) =>
            <InfoCards
              key={i}
              TopText={data.TopText}
              BottomText={data.BottomText}
              Img={data.Img}
              FavIcon={data.FavIcon}
              upperFavIcon={data.upperFavIcon}
            />
          )
        }
      </div>
      <h2 className={styles.bottomText}>{bottomText}</h2>
    </div>
  )
}

export default SectionFull
