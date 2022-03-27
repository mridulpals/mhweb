import React from "react";
import Link from 'next/link';
import styles from "./accordian.module.css";

import Accordion from "react-bootstrap/Accordion";

const AccordionCustom = (props) => {
  return (
    <>
      <Accordion className={styles.acc + ` ${props.customClass}`}>
        <Accordion.Item eventKey={props.accques} className={styles.accitem}>
          {
            props.link ?
              <Link href={props.link} passHref>
                <div className={styles.accLink}>
                  {props.accques}
                </div>
              </Link>
              : <Accordion.Header className={styles.accheader + ` ${props.customHeaderClass}`}>{props.accques}</Accordion.Header>
          }
          <Accordion.Body className={styles.innerAccBody}>
            {
              props.accans && props.accans[0].name ?
                props.accans.map((menu, index) =>
                  <AccordionCustom
                    key={index}
                    accques={menu.name}
                    accans={menu.dropdown}
                    link={menu.link}
                    noSubcategory={menu.noSubCategory}
                    customClass={props.customClass}
                    customHeaderClass={props.customHeaderClass}
                    innerAcc={true}
                  />
                )
                : (
                  <div dangerouslySetInnerHTML={{ __html: props.accans }} className={styles.link} />
                )
            }
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default AccordionCustom