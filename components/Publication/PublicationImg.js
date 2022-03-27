import React from 'react'
import styles from './Publication.module.css'
// import { PubImgData } from '../../data/PubImgData'

const PublicationImg = (props) => {
  return (
    <div className={styles.PubImgCont}>
      <img src={props.PubImg} className={styles.PubImg} alt="" />
    </div>
  )
}

export default PublicationImg