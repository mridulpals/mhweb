import React from 'react'
import styles from './MeetTheTeamCard.module.css'
import Image from 'next/image'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MeetTheTeamCard = (props) => {
  return (
    <div className={styles.MeetTheTeamCard}>
      <FontAwesomeIcon className={styles.TeamCardPlus} icon={faCirclePlus} />
      <div className={styles.CardOverlay}></div>
      <Image
        className={styles.TeamCardImg}
        src={props.TeamMemberImg}
        layout="fill"
        quality={100}
        objectFit="cover"
      />
      <div className={styles.TeamCardTextCont}>
        <h5 className={styles.TeamCardTextOne}>{props.TeamMemberPosition}</h5>
        <h5 className={styles.TeamCardTextTwo}>{props.TeamMemberName}</h5>
      </div>
    </div>
  )
}

export default MeetTheTeamCard