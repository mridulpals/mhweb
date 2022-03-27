import React from 'react'
import { useRouter } from 'next/router';
import Styles from './customButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomButton = (props) => {

  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    if (props.route) {
      router.push(props.route);
    }
  }

  return (
    <button
      className={props.primary ? Styles.primaryBtn : " "}
      onClick={handleClick}
    >
      {
        props.leftIcon ?
          <FontAwesomeIcon icon={props.leftIcon} className={Styles.btnIcon} />
          : null
      }
      {props.btn_text}
    </button>
  )
}

export default CustomButton