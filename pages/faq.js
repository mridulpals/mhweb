import React from "react";
import styles from "../components/faq/faq.module.css";
import Image from "next/image";
import LeafImg from "../public/assets/leaf.png";
import AccordionCustom from "../components/accordion/AccordionCustom";
// import { Accordion } from "react-bootstrap";
const faq = () => {
  // const acc={
  //   accques:"Are there any volunteer opportunities at Mindful Habitats?",
  //   accans:`Yes, at Mindful Habitats we are really proud of the vast experience 
  //   that our volunteers bring with them, the excitement and energy that
  //   they bring with them is truly inspiring and has the potential to
  //   transform lives.`
  // }
  const accItems = [
    {
      accques: "Are there any volunteer opportunities at Mindful Habitats?",
      accans: `Yes, at Mindful Habitats we are really proud of the vast experience 
      that our volunteers bring with them, the excitement and energy that
      they bring with them is truly inspiring and has the potential to
      transform lives.`
    },
    {
      accques: "What are the learning opportunities for the volunteers?",
      accans: `Volunteers work with the team based on their areas of interest,
      teams comprise of peer volunteers and leaders who are highly skilled
      in their areas of interest, learning comes naturally in the form of
      shared experience as well as formal training associated with the
      campaign.`
    },
    {
      accques: " I have some creative ideas can I offer a workshop?",
      accans: `Yes, let’s get in <a href="./contactus">touch</a>. We will be happy to discuss your plan.`,
    },

  ]

  return (
    <div className={styles.body}>
      <div className={styles.faqhead}>
        <h3 className={styles.faq}>Frequently Asked Question!</h3>
        <div className={styles.imagecontainer}>
          <Image
            src={LeafImg}
            layout="fill"
            objectFit="cover"

          />
        </div>
      </div>
      <div className={styles.ques}>
        {/* <FAQ
            accques={acc.accques}
            accans={acc.accans}
         /> */}
        {/* <FAQ>
         {
         accItems.map((item, index) =>
                    <div className={styles.accItem} key={index}>{item.accques}</div>)
         }
         </FAQ> */}

        {
          accItems.map((item, index) =>
            <AccordionCustom
              key={index}
              accques={item.accques}
              accans={item.accans}
            />
          )
        }
        {/*          
         <FAQ
            accques={acc.accques}
            accans={acc.accans}
         /> */}

      </div>
      {/*
      <Accordion defaultActiveKey={[""]} alwaysOpen>
      <div>
        <Accordion.Item eventKey="0" className={styles.subfaq}>
          <Accordion.Header>
            Are there any volunteer opportunities at Mindful Habitats?
          </Accordion.Header>
          <Accordion.Body>
            Yes, at Mindful Habitats we are really proud of the vast experience
            that our volunteers bring with them, the excitement and energy that
            they bring with them is truly inspiring and has the potential to
            transform lives.
          </Accordion.Body>
        </Accordion.Item>
        </div>
        <div>
        <Accordion.Item eventKey="1" className={styles.subfaq}>
          <Accordion.Header>
            What are the learning opportunities for the volunteers?
          </Accordion.Header>
          <Accordion.Body>
            Volunteers work with the team based on their areas of interest,
            teams comprise of peer volunteers and leaders who are highly skilled
            in their areas of interest, learning comes naturally in the form of
            shared experience as well as formal training associated with the
            campaign.
          </Accordion.Body>
        </Accordion.Item>
        </div>
        <div>
        <Accordion.Item eventKey="2" className={styles.subfaq}>
          <Accordion.Header>
          I have some creative ideas can I offer a workshop?
          </Accordion.Header>
          <Accordion.Body>
          Yes, let’s get in <a href="./contactus"target="_blank" className={styles.link}>touch</a>. We will be happy to discuss your plan.
          </Accordion.Body>
        </Accordion.Item>
        </div>
      </Accordion>
      </div> */}
    </div>
  );
}
export default faq;
