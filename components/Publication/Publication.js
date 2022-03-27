import React from 'react'
import styles from './Publication.module.css'
import Image from 'next/image'
import PublicationImg from './PublicationImg'
import { PubImgDataArchitectural, PubImgDataMadhubaniOne, PubImgDataMadhubaniTwo, PubImgDataSD } from '../../data/PubImgData'

const Publication = () => {
  return (
    <div>
      <div className={styles.PubCont}>
        <h2>Madhubani Elements: World Leaders</h2>
        <div className={styles.PubItemsCont}>
          <div className={styles.PubItems}>

            {
              PubImgDataMadhubaniOne.map((data, i) =>
                <PublicationImg
                  key={i}
                  PubImg={data.PubImg}
                />
              )
            }
          </div>
          <div className={styles.PubItems}>
            {
              PubImgDataMadhubaniTwo.map((data, i) =>
                <PublicationImg
                  key={i}
                  PubImg={data.PubImg}
                />
              )
            }
          </div>
        </div>
      </div>
      <div className={styles.PubCont}>
        <h2>Walking the Architectural Dream</h2>
        <div className={styles.PubItemsCont}>
          <div className={styles.PubItems}>

            {
              PubImgDataArchitectural.map((data, i) =>
                <PublicationImg
                  key={i}
                  PubImg={data.PubImg}
                />
              )
            }
          </div>
        </div>
      </div>
      <div className={styles.PubCont}>
        <h2>Storytellers and Dreamers</h2>
        <div className={styles.PubItemsCont}>
          <div className={styles.PubItems}>

            {
              PubImgDataSD.map((data, i) =>
                <PublicationImg
                  key={i}
                  PubImg={data.PubImg}
                />
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Publication