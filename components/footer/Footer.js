import React from 'react';
import styles from './footer.module.css'
import { faPhone, faEnvelope, faLocationDot, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (

    <footer className={styles.footerContainer}>
      <div className={'mainLayout'}>
        <div className={styles.subcontainerup}>
          <div ><div className={styles.iconHolder}><FontAwesomeIcon className={styles.footerIcons} icon={faPhone} /></div><p><a href="tel:+1 613 617 1770">+1 613 617 1770</a></p></div>
          <div><div className={styles.iconHolder}><FontAwesomeIcon className={styles.footerIcons} icon={faEnvelope} /></div><p><a href="mailto:info@mindfulhabitats.ca">
            info@mindfulhabitats.ca
              </a></p></div>
          <div><div className={styles.iconHolder}><FontAwesomeIcon className={styles.footerIcons} icon={faLocationArrow} /></div><p><a href="https://www.google.com/maps/place/5801+Old+Richmond+Rd,+Richmond,+ON+K0A+2Z0,+Canada/@45.2565595,-75.8264197,17z/data=!3m1!4b1!4m5!3m4!1s0x4ccdfc04ad19169d:0x17b32ef02671308c!8m2!3d45.2565595!4d-75.824231 "
            target="_blank" rel="noreferrer">5801 Old Richmond Road, Ottawa, ON, Canada
              </a></p></div>
        </div>
        <hr />
        <div className={styles.subcontainerdown}>
          <div><p>Copyright © 2022 | Canadian Centre for Mindful Habitats</p></div>
          <div className={styles.socialLogoContainer}>
            <a href="https://twitter.com/centrehabitats" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faTwitter} className={styles.socialLogo} /></a>
            <a href="https://www.facebook.com/CanadianMindfulHabitats" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faFacebook} className={styles.socialLogo} /></a>
            <a href="https://www.instagram.com/mindfulhabitats/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faInstagram} className={styles.socialLogo} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
