import React from 'react'
import Image from 'next/image';
import Styles from './InfoCards.module.css';
import CustomButton from '../button/CustomButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const InfoCards = (props) => {

  return (
    <div className={Styles.card}>
      <FontAwesomeIcon className={Styles.FontAwesomeIcon} icon={props.upperFavIcon} />
      <div className={Styles.CardHeading}>
        <h4>{props.TopText}</h4>
        <FontAwesomeIcon icon={props.FavIcon} className={Styles.FontAwesomeIcon} />
      </div>
      {
        props.Img &&
        <div className={Styles.CardBody}>
          <Image
            src={props.Img}
            layout="fill"
            className={Styles.CardImg}
            objectFit="cover"
            quality={100}
          />
        </div>
      }
      <div className={Styles.CardBottom}>
        <div className={Styles.CardBottomTextCont}>
          <h6>{props.BottomText}</h6>
        </div>
        {
          props.btnText &&
          <CustomButton primary btn_text={props.btnText} />
        }
      </div>
    </div>
  )
}

export default InfoCards