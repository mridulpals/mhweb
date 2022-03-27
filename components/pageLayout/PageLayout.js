import { useEffect, useState } from 'react';
import PageHeading from '../pageHeading/PageHeading';
import Section from '../section/Section';
import SectionFull from '../section/SectionFull';

// Assets
import styles from './pageLayout.module.css';
import Image from 'next/image';
import TopLeaf from "../../public/assets/topleaf.png";

const PageLayout = ({ pageData, pageType, pageHeading }) => {

  const [sectionData, setsectionData] = useState([])

  useEffect(() => {
    setsectionData(pageData)
  }, [pageData])

  return (
    <div className={styles.pageWrapper}>
      <PageHeading pageHeading={pageHeading} />
      {
        sectionData.map((data, i) =>
          data.fullSection ?
            <SectionFull
              cardData={data.cardData}
              heading={data.heading}
              bottomText={data.bottomText}
              key={i}
            /> :
            <Section data={data} key={i} />
        )
      }
    </div>
  )
}

export default PageLayout
