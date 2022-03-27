import React from 'react'
import ECTopCard from '../../../components/eventCalendarComp/ECTopCard'
import EventCalendar from '../../../components/eventCalendarComp/EventCalendarComp'
import { eventCalendarData } from '../../../data/eventCalendarData'
import { ECTopCardData } from '../../../data/ECTopCardData'
const eventCalendar = () => {
  return (
    <>
      <EventCalendar pageData={eventCalendarData} />
      
    </>
  )
}

export default eventCalendar
