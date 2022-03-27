import logo from '../public/assets/Logo.png'
import aboutusimg1 from '../public/assets/grapes.jpg'
import aboutusimg2 from '../public/assets/joinmovement.jpg';
import farmingimg from '../public/assets/images/farming03-free-img.jpg';
import { faAppleWhole, faCake, faCampground, faLeaf, faPepperHot, faTree, faSun, faBeerMugEmpty, faHandsAslInterpreting, faHeartPulse, faSnowboarding, faLightbulb, faRecycle, faHandshake, faSitemap } from "@fortawesome/free-solid-svg-icons";
import upperLeaf from '../public/assets/leaf.png'

export const aboutUsdata = [
  {
    heading: 'MindFul Habitats',
    image: aboutusimg1,
    description: `<p>
        Canadian Centre for Mindful Habitats is a non-profit organization committed to bring a positive change in our community and promote sustainable practices.
      </p>
      <p>
        Mindful Habitats inculcates habits that are considerate towards self, fellow beings and the earth. These benefit and bring joy to oneself, the community &amp; our surroundings.
      </p>
      <p>
        <strong>
          Our Mission
        </strong>
        is to present realistic solutions for real-life conditions, where things are done with a simple but comprehensive and wholesome approach. We aim to create an experience full of benefits of eating healthy food and leading a healthy lifestyle, to showcase and provide infrastructure for constructive recreation and celebrations where consciousness to preserve our environment is integrated naturally in the methodology. The objective is to create a movement to promote eco-friendly habits and habitats
      </p>`,
    firstLetterCaps: true,
  },
  {
    upperHeading: 'Bringing Community to Lives, Life to Communities',
    upperIcon: upperLeaf,
    heading: 'Join The Mindful Movement!',
    image: aboutusimg2,
    cardButton: {
      text: 'The Big Picture',
      icon: faSitemap,
      route: '/the-big-picture'
    },
    reverseCard: true,
    description: `<p>Canadian Centre for Mindful Habitats is a non-profit organization committed to:</p><ul><li>Promote healthy lifestyle for individuals</li><li>Build strong, mindful, sustainable communities</li></ul><p>We are all curious, inquisitive and intrinsically creative, and most of us are aware of certain aspects of our everyday lives that can be improved. It may be habits, surroundings, activities, situations or our own home. Mindful Habitats is all about bringing that constructive awareness, initiating the individual actions and creating amazing communities as a result.</p>`,
  },
  {
    fullSection: true,
    heading: "Our Vision:",
    bottomText: "For All",
    cardData: [
      {
        TopText: "Abundance of Healthy Food",
        BottomText: "Access to fresh fruits and vegetables, free from pesticides and other unhealthy practices",
        upperFavIcon: faAppleWhole
      },
      {
        TopText: "Healthy Lifestyle",
        BottomText: "Mindful habits such as yoga, communion with nature, clutter-free life and positive entertainment",
        upperFavIcon: faHeartPulse
      },
      {
        TopText: "Constructive Recreation",
        BottomText: "While following our passions like camping, forest walks and sports we make things better than before",
        upperFavIcon: faSnowboarding
      },
      {
        TopText: "Creative Atmosphere",
        BottomText: "Create efficient spaces, positive interactions, forums, knowledge base and shared services",
        upperFavIcon: faLightbulb
      },
      {
        TopText: "Sustainable Growth",
        BottomText: "Growth and achievement to meet personal goals while ensuring a +ive impact on our environment",
        upperFavIcon: faRecycle
      },
    ]
  },
  {
    heading: 'Presently and in Near Future:',
    image: farmingimg,
    cardButton: {
      text: 'Join US',
      icon: faHandshake,
      route: '/get-involved'
    },
    reverseCard: true,
    upperDescription: {
      icon: logo,
      heading: "What's in the Logo?",
      description: '<p>Simple human connections are the core of our worlds. <br /> Behind the clutter and noise of the world we live in, prevails a beautiful chorus of caring perspectives and a feeling of togetherness. It is with this state of natural mindfulness, the earth embraces us and feeds us, and with this same state of mindfulness we must celebrate the festival of life</p>'
    },
    cardListItems: [
      {
        icon: faLeaf,
        name: 'Food & other plants'
      },
      {
        icon: faBeerMugEmpty,
        name: 'Kombucha & Kefir'
      },
      {
        icon: faTree,
        name: 'Tree plantation'
      },
      {
        icon: faHandsAslInterpreting,
        name: 'Community Gardens'
      },
      {
        icon: faPepperHot,
        name: 'Fresh vegetables'
      },
      {
        icon: faCampground,
        name: 'Camping'
      },
      {
        icon: faAppleWhole,
        name: 'Fresh fruits'
      },
      {
        icon: faTree,
        name: 'Forest walks'
      },
      {
        icon: faSun,
        name: 'Dried vegetables & fruits'
      },
      {
        icon: faCake,
        name: 'Celebrate events'
      },
    ]
  },
]