import React from 'react'
import styles from './eventCalendarComp.module.css'
import Image from 'next/image'
import Link from 'next/link'
import CustomButton from '../button/CustomButton'
import { ECTopCardData } from '../../data/ECTopCardData'
import ECTopCard from './ECTopCard'
import { style } from '@mui/system'

const ECCardComp = (props) => {
  return (
    // <div className={styles.ECTopCardCont}>
    //   {
    //     ECTopCardData.map((data, i) =>
    //       <ECTopCard
    //         data={data}
    //         key={i}
    //       />
    //     )
    //   }
    // </div>
    <div className={styles.eventCalendarmain} style={{ backgroundColor: props.data.BgColor }}>
      <div className={styles.ECimgdiv}>
        <Link href={props.data.eventimage.route}>
          <Image
            src={props.data.eventimage.image}
            layout="fill"
            objectFit="cover"
          />
        </Link>
      </div>

      <div className={styles.ECFlexCont}>
        <div className={styles.ECCardCenter} >
          <div dangerouslySetInnerHTML={{ __html: props.data.desc }} className={styles.speakerName}>

          </div>
        </div>
        <div className={styles.dateTime}>
          <p>{props.data.date}</p>
          <p>{props.data.timeCanada}</p>
          <p>{props.data.timeIndia}</p>
          <Link href={props.data.recordingButton.route}>
            <CustomButton primary btn_text={props.data.recordingButton.text} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ECCardComp