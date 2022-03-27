import React from "react";
import Image from "next/image";
import CustomButton from "../button/CustomButton";
import styles from "./mindfulmillennials.module.css";
import mindfulMillennialsimg from "../../public/assets/images/mindfulMillennialsimg.png";
import { useState } from "react";

const MindfulMillennials = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [edubg, setedubg] = useState("");
  const [profbg, setprofbg] = useState("");
  const [city, setcity] = useState("");
  const [reply, setreply] = useState("");
  const [message1, setmessage1] = useState("");
  const [message2, setmessage2] = useState("");

  const btntext = "Submit";
  const handleChange = (e) => {
    setreply(e.target.value)
  }
  const resetRadioState = () => {
    setreply('');
  }
  return (
    <div className={styles.mainMindfulMillennials}>
      <div className={styles.subMindfulMillennials}>
        <div>
          <p>
            Mindful Habitats for Millennials is an initiative by the Canadian
            Centre for Mindful Habitats focussing specifically on millennials
            and various aspects of their habitats (current as well as
            prospective). What is a millennial mindful habitat and how to make
            it happen? &nbsp;
          </p>
        </div>
        <div className={styles.mindfulMillennialsImg}>
          <Image src={mindfulMillennialsimg} objectFit="cover" />
        </div>
        <div>
          <p>
            <strong>Why Millennials?</strong>
          </p>
          <br></br>
          <p>
            All Millennials (born 1981-1996) are in the age group 25-40 years in
            2021. It can be said certainly that they are the most active people
            entering into the housing market today. While there are various
            success stories for this group there are a lot of unfulfilled
            expectations as well. It is almost dramatic how the burden of
            expectations and the memory of hardships in securing homes is
            influencing the habitat building process for millennials.
          </p>
          <br></br>
          <p>
            The research project will bring together experts, specialists and
            researchers in this field, initiate conversations and aim to create
            protocols and projects for exploring potential interventions and
            initiatives.
          </p>
          <br></br>

          <p>
            The scope of the project will be to discuss, study, define and
            develop a framework to enable individuals and communities to achieve
            their individual mindful habitats and build mindful communities.
          </p>
          <br></br>
          <p>
            Canadian Centre for Mindful Habitats is currently recruiting
            research associates residing in Canada for the first phase of the
            project, which sets up conversations that involve the stakeholders.
            We are looking for associates who are following the housing market
            closely as buyers, sellers, agents, lawyers, or simply observers or
            investors. Other professionals who are related to housing through
            professional or academic initiatives are welcome to apply. This
            includes(but not limited to) historians, market and financial
            analysts, urban planners, architects, interior designers, policy
            makers, sociologists, economists, cultural organizations and more.
          </p>
          <br></br>

          <p>
            The associates will work with the team, attend team meetings, and
            will assume roles and responsibilities based on their areas of
            expertise. Recruitment will be done by the team leads based on how
            and what the applicant can contribute to the project.
          </p>
          <br></br>

          <p>To apply fill the form below</p>

          <br></br>
          <div className={styles.millennialsForm}>
            <form action="">
              <label className={styles.required}>
                <b>Name</b>
              </label>
              <br></br>
                
              <div className={styles.namediv} >
              <div className={styles.namedivone}>
              <input
                type="text"
                className={styles.name}
                placeholder="First"
                required
                value={fname}
                onChange={(e) => setfname(e.target.value)}
              />
              </div>
              &nbsp;&nbsp;
              <div className={styles.namedivtwo}>
              <input
                type="text"
                className={styles.name}
                placeholder="Last"
                required
                value={lname}
                onChange={(e) => setlname(e.target.value)}
              />
              </div>
              </div>
              
              <br></br>
              <label className={styles.required}>
                <b>Email</b>
              </label>
              <br></br>
              <input
                type="text"
                className={styles.email}
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <br></br>
              <br></br>
              <b className={styles.edubghead}>Educational Background</b>
              <br></br>
              <input
                type="text"
                className={styles.edubg}
                value={edubg}
                onChange={(e) => setedubg(e.target.value)}
              />
              <br></br>
              <br></br>
              <label className={styles.required}>
                <b>Professional Background</b>
              </label>
              <br></br>
              <input
                type="text"
                className={styles.profbg}
                required
                value={profbg}
                onChange={(e) => setprofbg(e.target.value)}
              />
              <br></br>
              <br></br>
              <label className={styles.required}>
                <b>Do you live in Canada</b>
              </label>
              <br></br>
              <div>
                <div>
                  <input
                    type="radio"
                    name="radio"
                    
                    className={styles.inputradio}
                    // checked={reply === 'Yes'}
                    onChange={handleChange}
                  />
                  <label className={styles.label} htmlFor={"reply"}>Yes</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="radio"
                    className={styles.inputradio}
                    // checked={reply === 'No'}
                    onChange={handleChange}
                  />
                  <label className={styles.label} htmlFor={"reply"}>No</label>
                </div>
              </div>
             
              <br></br>
              <label className={styles.required}>
                <b>If yes, city of residence </b>
              </label>
              <br></br>
              <input
                type="text"
                className={styles.cityname}
                required
                value={city}
                onChange={(e) => setcity(e.target.value)}
              />
              <br></br>
              <br></br>
              <label className={styles.required}>
                <b>Why did this project interest you?</b>
              </label>
              <br></br>
              <textarea
                className={styles.message}
                value={message1}
                onChange={(e) => setmessage1(e.target.value)}
              ></textarea>
              <br></br>
              <br></br>
              <label className={styles.required}>
                <b>
                  How do you think you can contribute to the definition of the
                  project?
                </b>
              </label>
              <br></br>
              <textarea
                className={styles.message}
                value={message2}
                onChange={(e) => setmessage2(e.target.value)}
              ></textarea>
              <br></br>
            </form>

            <div>
              <CustomButton primary btn_text={btntext} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindfulMillennials;
