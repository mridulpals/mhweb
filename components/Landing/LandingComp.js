import React from 'react'
import styles from './LandingComp.module.css';
import Image from 'next/image';
import InfoCards from '../InfoCards/InfoCards'
import Section from '../section/Section';
import coverImg from '../../public/assets/images/study_cover.jpg'

import { cardData, sectionData } from '../../data/landingData';

const LandingComp = () => {
  return (
    <>
      <div className={styles.landingContainer}>
        <div className={styles.coverimgContainer}>
          <Image src={coverImg} layout={'fill'} />
        </div>
        <div className={styles.sectionContainer}>
          <Section data={sectionData} className={styles.sectionClass} />
        </div>
        <div className={styles.landingCards}>
          <div className={styles.landingCardContainer + ' mainLayout'}>
            {
              cardData.map((data, i) =>
                <InfoCards
                  key={i}
                  TopText={data.TopText}
                  BottomText={data.BottomText}
                  Img={data.Img}
                  FavIcon={data.FavIcon}
                  btnText={data.btnText}
                />
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingComp