import React from "react";
import styles from "./theBigPicture.module.css";
import Image from "next/image";
import bulbimg from "../../public/assets/LightOfThought.jpg";
import leafElement from "../../public/assets/logo-leaf-new.png";
import { style } from "dom-helpers";
import CustomButton from "../button/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
const TheBigPicture = (props) => {
  const text = "Join Us"
  const btnicon = faHandshake
  return (
    <div className={styles.motherDivBigPicture + ' mainLayout'}>
      <div className={styles.ourStoryContainer}>
        <div className={styles.ourStoryImage}>
          <Image src={bulbimg} layout={'fill'} />
        </div>
        <div className={styles.ourStoryText}>
          <h2>Our Story: How it all started?</h2>
          <p>
            In early 2017 Myra learnt in her JK School activity that seeds can
            be used to make trees. At home she asked us if that is possible from
            the seeds of the apple she ate. That is how first seeds were put to
            sprout and three did! These turned out to be happy plants through
            the Summer of 2017. By the Fall of 2017 it was clear to us that
            these plants do not have much future in the pots they were in at
            that time. So we planted two of them next to our house in Ottawa
            south and took the third, the best amongst the three, inside our
            house to be put under lights within the warmth of our home.
            <br />
            <br />
            It was really pleasant to have an apple plant inside our house-- to
            see tiny leaves sprouting and growing bigger. However in just a few
            weeks the colors started to fade and then in no time the plant died
            completely. There wasn’t much we could do about that and not much
            happened for a very very long time.
            <br />
            <br />
            It was a pleasant surprise in the spring of 2018 when the two plants
            planted outdoors showed up signs of life, especially because we did
            not expect much from them anyway. These turned out to be happy
            plants through summer of 2018 and 2019. Later in the summer of 2019
            these two plants were transplanted near Limerick Forest, their new
            home.
            <br />
            <br />
            Our first experience with tree plantation was enlightening. We very
            clearly saw how the forces in nature work-- how the plants left
            outside were actually so much at home. They thrived well and grew
            into happy and healthy plants. So it was unnecessary to make futile
            efforts to provide a better environment for our best plant, while
            all that was needed by the plant to thrive, already existed in
            nature.
            <br />
          </p>
        </div>
      </div>
      <div className={styles.planHead}>
        <h2>How we plan to take things forward?</h2>
        <p>
          Following is the phase-wise breakup of our plans and activities (at
          present and in future)
        </p>
      </div>
      <div className={styles.planBreakup}>
        <h3>Phase 1</h3>
        <ul className={styles.bullets}>
          <li>Plants for Food, Flowers and Indoor Use</li>
          <li>Fresh Vegetables</li>
          <li>Tree Plantation</li>
          <li>Fresh Fruits</li>
          <li>Dehydrated Fruits and Vegetables</li>
        </ul>

        <h3>Phase 2</h3>
        <ul className={styles.bullets}>
          <li>Food Processing focused on Healthy Living </li>
          <li>Community Gardens open to all</li>
          <li>Camping and related activities</li>
          <li>Forest Walks</li>
          <li>Celebrate Events</li>
        </ul>

        <h3>Phase 3</h3>
        <ul className={styles.bullets}>
          <li>Heated Greenhouses </li>
          <li>All Season Community Gardens</li>
          <li>Small Animal Farm</li>
        </ul>

        <h3>Phase 4</h3>
        <ul className={styles.bullets}>
          <li>
            Integrated Community Living: Individuals, Families and Seniors
          </li>
          <li>Meditation Centre</li>
          <li>Community Centre</li>
          <li>Shared Services for sustainable living</li>
        </ul>

        <h3>Phase 5</h3>
        <ul className={styles.bullets}>
          <li>
            After thorough testing and gaining all the experiences from phase 1
            to 4, implement this sustainable community setup in a scalable
            manner over other locations, thereby continuing to generate amazing
            communities
          </li>
          <li>
            Create an open source knowledge base to record and share:
            Experience, Feedback and Skill
          </li>
        </ul>
      </div>
      <div className={styles.bigPicturePreFooter}>
        <div className={styles.leafElement}>
          <Image
            src={leafElement}
            objectFit="cover"
          // layout='fill'
          />
        </div>
        <div className={styles.bottomButtomWrap}>
          <CustomButton
            primary
            btn_text={text}
            leftIcon={btnicon}
            route={'/get-involved'}
          />
        </div>
      </div>
    </div>
  );
};

export default TheBigPicture;
