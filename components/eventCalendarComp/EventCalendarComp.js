import React from 'react'
import styles from "./eventCalendarComp.module.css"
import CustomButton from "../button/CustomButton"
import { eventCalendarData } from '../../data/eventCalendarData'
import ECCardComp from './ECCardComp'
import ECTopCard from './ECTopCard'
import { ECTopCardData } from '../../data/ECTopCardData'

const EventCalendarComp = () => {
  return (
    <div className="mainLayout">
      <div className={styles.ECHead}>
        <h1>Event Calendar: Design and Culture</h1>
        <p>Mindful Conversations: Webinar Series 2021: Design and Culture</p>
      </div>
      <div className={styles.ECTopCardCont}>
        {
          ECTopCardData.map((data, i) =>
            <ECTopCard
              data={data}
              key={i}
            />
          )
        }
      </div>
      {
        eventCalendarData.map((data, i) =>
          <ECCardComp
            data={data}
            key={i}
          />
        )
      }
    </div>
  )
}

export default EventCalendarComp