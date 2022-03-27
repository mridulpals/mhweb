import React from "react";
import Image from "next/image";
import styles from "./section.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomButton from "../button/CustomButton";
const Section = ({ data, ...rest }) => {
  const {
    upperHeading,
    heading,
    image,
    imageOpacity,
    description,
    reverseCard,
    upperIcon,
    cardButton,
    upperDescription,
    cardListItems,
    firstLetterCaps,
    firstLetterCapsAllPara,
    bottomHeading
  } = data;

  return (
    <section
      className={rest.className + ` ${styles.sectionWrapper}` + " mainLayout"}
    >
      <div
        className={
          styles.container + ` ${reverseCard ? styles.reverseContainer : ""}`
        }
      >
        <div className={styles.textContainer}>
          {upperDescription && (
            <div className={styles.upperDescription}>
              <div className={styles.upperImg}>
                <Image src={upperDescription.icon} layout="responsive" />
              </div>
              <div className={styles.upperContainer}>
                <h4 className={styles.upperDescriptionHeading}>
                  {upperDescription.heading}
                </h4>
                <p
                  className={styles.upperContent}
                  dangerouslySetInnerHTML={{
                    __html: upperDescription.description,
                  }}
                />
              </div>
            </div>
          )}
          {upperIcon && (
            <div className={styles.iconContainer}>
              <Image src={upperIcon.src} layout={"fill"} />
            </div>
          )}
          {upperHeading && (
            <h4 className={styles.upperHeading}>{upperHeading}</h4>
          )}
          {heading && <h3 className={styles.heading}>{heading}</h3>}
          <div
            className={
              styles.description +
              ` ${firstLetterCaps && styles.firstLetterCaps} ${firstLetterCapsAllPara && styles.firstLetterCapsAllPara}`
            }
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {cardListItems && (
            <div className={styles.listContainer}>
              {cardListItems.map((item, i) => (
                <div className={styles.listItem} key={i}>
                  <div className={styles.listIcon}>
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={styles.fontawesomeicons}
                    />
                  </div>
                  {item.name}
                </div>
              ))}
            </div>
          )}
          {cardButton && (
            <CustomButton
              primary
              btn_text={cardButton.text}
              leftIcon={cardButton.icon}
              route={cardButton.route}
            />
          )}
        </div>
        <div
          className={styles.imageContainer}
          style={imageOpacity && { opacity: imageOpacity }}
        >
          <img src={image && image.src} alt="" />
          {/* Replace with next/image */}
        </div>
      </div>
    </section>
  );
};

export default Section;
