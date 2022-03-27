import React from 'react'
import styles from './ECTopCard.module.css'

const ECTopCard = (props) => {
  return (
    // <div className={styles.ECTopCardCont}>
    <div className={styles.ECTopCard} style={{ backgroundColor: props.data.bgColor }}>
      <h1>{props.data.Heading.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.data.Desc }} className={styles.ECTopCardBody}>
      </div>
    </div>
    // </div>
  )
}

export default ECTopCard