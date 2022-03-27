import React from 'react';
import PageHeading from '../pageHeading/PageHeading';
import MeetTheTeamCard from '../../components/MeetTheTeamCard/MeetTheTeamCard'
import { team } from '../../components/MeetTheTeamCard/MeetTheTeamData'
import styles from './MeetTheTeamLayout.module.css'

const MeetTheTeamLayout = () => {
  return (
    <div className={styles.MeetTheTeamCont}>
      <div className={styles.MeetTheTeamHeader}>
        <h2>Meet the Team</h2>
      </div>
      {
        team.map((item, index) =>
          <div className={styles.MemberRow} key={index}>
            {
              item.memberDetails.map((member, i) =>
                <MeetTheTeamCard
                  key={i}
                  TeamMemberImg={member.TeamMemberImg}
                  TeamMemberPosition={member.TeamMemberPosition}
                  TeamMemberName={member.TeamMemberName}
                />
              )
            }

          </div>
        )
      }</div>
  )
}

export default MeetTheTeamLayout