import CardOneImg from '../public/assets/CANADA-1.jpg'
import CardTwoImg from '../public/assets/CANADA-2.jpg'
import CardThreeImg from '../public/assets/CANADA-3.jpg';
import landingCardImg from '../public/assets/images/canada-center-mindful-habitat.png';

import { faUsersCog } from "@fortawesome/free-solid-svg-icons";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";

export const sectionData = {
  description: "<p style='color: #ffffff;'>Canadian Centre for Mindful Habitats is a pioneering organization to promote and propagate mindfulness in what we do as individuals and organizations. Mindful Habitats&rsquo; diverse agenda includes pursuing pertinent and ethical inquiries and conversations that impact the way we live, teach, research design and disseminate to enable informed decision making. The aim is to develop and foster a culture of contributing consciously and mindfully to research, not as a method of demonstration of pre-established whimsical ideas, but as a method of inquiry to truly unleash the power of true research that ensures that the important data points and by-products of research are not lost, rather they are recycled into the research, leading to enhanced efficiency and amazing outcomes. The goal is to create performance oriented, applied research, seamlessly integrated over geography and time and converted into action items independent of individual activism and corresponding to collective growth, development and happiness.</p>",
  image: landingCardImg,
  imageOpacity: 0.7,
  firstLetterCaps: true,
}

export const cardData = [
  {
    TopText: "Canada Celebrates \nFolklore",
    BottomText: "Call for Illustrations | 2021",
    Img: CardOneImg,
    FavIcon: faUsersCog,
    btnText: "More Info"
  },
  {
    TopText: "Mindful Modernism(s)",
    BottomText: "Webinar Series | Fall 2021",
    Img: CardTwoImg,
    FavIcon: faScaleBalanced,
    btnText: "More Info"
  },
  {
    TopText: "Design and Culture",
    BottomText: "Webinar Series | Winter 2021",
    Img: CardThreeImg,
    FavIcon: faAppleWhole,
    btnText: "More Info"
  }
]