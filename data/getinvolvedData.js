import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import getinvolvedimg from "../public/assets/images/getinvolvedimg.png";

export const getinvolvedData = [
  {
    heading: "",
    image: getinvolvedimg,
    cardButton: {
      text: "Shout!",
      icon: faBullhorn,
      route: "/contact",
    },
    reverseCard: true,
    description: `<p>Mindful Habitats is determined to build awesome communities, where we share a common goal of leading a healthy and happy life. We count on your support in order to achieve that. There are several ways in which you can join us and together we can make a lot of things happen.</p>
            <p>Please take a moment to look at&nbsp;<a href="/the-big-picture" style="color:#8bc34a;">The Big Picture</a> and think how you would like to join us. If you have any questions or concerns please feel free to&nbsp;Contact Us.</p>
            <p>There are several ways in which you can participate:</p>
            <ul>
                <li>Become a Friend of Mindful Habitats: Volunteer for events of your choice.</li>
                <li>Join our Campaigns: Spread the good word around and propagate happiness.</li>
                <li>Volunteer: Help make things happen.</li>
                <li>Join Workshops and Clubs: Learn and share your knowledge and experience with us.</li>
                <li>Donate: The Best Things in Life Are Free; for others we count on your support. Together we can make things happen!</li>
            </ul>
        
            <p>We will be delighted to hear from you!</p>`,
  },
];

export default getinvolvedData;
