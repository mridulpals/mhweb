import React from "react";
import Image from "next/image";
import styles from "./meettheTeamDesc.module.css";
const MeetTheTeamDesc = (props) => {
  return (
    <>
      <div className={styles.mainbg + ' mainLayout'}>
        <div className={styles.memberimg}>
          <div className={styles.memberimgcontainer}>
            <Image
              src={props.memberimg}
              alt=""
              // layout="fill"
              objectFit="cover"
            />
          </div>

          <p>{props.imgtitle}</p>
        </div>
        <div className={styles.memberheading}>
          <p>{props.memberheading}</p>
        </div>
        <div className={styles.memberdesc}>
          <p>
            {props.memberdescription}
          </p>
        </div>
      </div>
    </>
  );
};

export default MeetTheTeamDesc;
