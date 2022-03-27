import React from "react";
import styles from "./contactus.module.css";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomButton from "../button/CustomButton";
import { useState } from "react";
const ContactusLayout = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  const text = "Send Message"
  return (
    <div className={styles.main}>
      <div className={styles.maininner}>
        <h2 className={styles.pageTitle}>Contact Us:</h2>
        <div className={styles.info + ' mainLayout'}>
          <div className={styles.phone}>
            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
            <p>
              <a href="tel:+1 613 617 1770">+1 613 617 1770</a>
            </p>
          </div>
          <div className={styles.email}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />

            <p>
              <a href="mailto:info@mindfulhabitats.ca">
                info@mindfulhabitats.ca
              </a>
            </p>
          </div>
          <div className={styles.address}>
            <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />

            <p>
              <a
                href="https://www.google.com/maps/place/5801+Old+Richmond+Rd,+Richmond,+ON+K0A+2Z0,+Canada/@45.2565595,-75.8264197,17z/data=!3m1!4b1!4m5!3m4!1s0x4ccdfc04ad19169d:0x17b32ef02671308c!8m2!3d45.2565595!4d-75.824231 "
                target="_blank"
                rel="noreferrer"
              >
                5801 Old Richmond Road, Ottawa, ON, Canada
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.message + ' mainLayout'}>
        <div className={styles.messageinner}>
          <form action="">
            <p className={styles.leavemsg}>
              <b>Leave a message?</b>
            </p>
            Your Name (required)
            <br></br>
            <input
              type="text"
              className={styles.note}
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <br></br>
            Your Email (required)
            <br></br>
            <input
              type="text"
              className={styles.note}
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <br></br>
            Subject
            <br></br>
            <input
              type="text"
              className={styles.note}
              placeholder="Subject"
              value={subject}
              onChange={(e) => setsubject(e.target.value)}
            />
            <br></br>Your Message
            <br></br>
            <textarea className={styles.text} placeholder="Message"
              value={message}
              onChange={(e) =>
                setmessage(e.target.value)}
            ></textarea>
            <CustomButton primary btn_text={text} />

          </form>
        </div>
      </div>
    </div >
  );
};

export default ContactusLayout;
