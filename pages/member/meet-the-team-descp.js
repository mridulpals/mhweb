import React from "react";
import Description from "../../components/teamLayout/MeetTheTeamDesc";
import pallavi from "../../public/assets/pallavi-swaranjali.png";
// import roger from "../../public/assets/Roger William Connah.png";
// import stephen from "../../public/assets/Stephen-Fai.png";
// import kurt from "../../public/assets/Kurt-Espersen-Peters.png";
// import katie from "../../public/assets/Katie-Graham.png";

const MemberDetails = () => {
  const memberdesc = {
    memberimg: pallavi,
    imgtitle: "Dr. Pallavi Swaranjali",
    memberheading: `Co-Director, Academic Initiatives \nCanadian Centre for Mindful Habitats`,
    memberdescription: `Pallavi Swaranjali is a full-time faculty in the Bachelor of Interior Design Program, Algonquin College, Ottawa. She has a B.A. in Architecture, M.Design in Industrial Design from India, and a PhD in Architecture from the Azrieli School of Architecture and Urbanism, Carleton University, Ottawa. She is presently an intern architect with the Ontario Association of Architects, Canada. Her research centers on the relationship between architecture and storytelling, looking at non-conventional modes of architectural representation that combine the normative and the fantastical, and the ways in which they meaningfully transform architectural making and experience. Her areas of teaching include residential and corporate studio, senior project, foundations of design as well as the history and theory of design. She is a coordinator of Carleton Research | Practice of Teaching | Collaborative (criptic.org) and one of the founder members of the Canadian Centre for Mindful Habitats (mindfulhabitats.ca).`,
  };
  return (
    <div>
      <Description
        memberimg={memberdesc.memberimg}
        imgtitle={memberdesc.imgtitle}
        memberheading={memberdesc.memberheading}
        memberdescription={memberdesc.memberdescription}
      />
    </div>
  );
};

export default MemberDetails;
