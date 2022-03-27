import React from 'react';
import Image from 'next/image';
import styles from './pageHeading.module.css';
import TopLeaf from "../../public/assets/topleaf.png";

const PageHeading = ({ pageHeading }) => {
  return (
    <>
      <h2 className={styles.pageTitle}>{pageHeading}</h2>
      <div className={styles.topLeafContainer}>
        <div className={styles.pageTopLeaf}>
          <Image
            src={TopLeaf}
            layout="fill"
          />
        </div>
      </div>
    </>
  )
}

export default PageHeading
