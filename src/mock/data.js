import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'vincent chee | dev',
  lang: 'en, fr, cn',
  description: 'the portfolio',
};

// HERO DATA
export const heroData = {
  title: 'hi, my name is',
  name: 'vincent',
  subtitle: "i'm a dev",
  cta: 'more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'i love enjoying life, trying and learning new things. i am a dev with full-stack skills and three years of experience at a high-paced start-up and a boutique consultancy company.',
  paragraphTwo: 'i strive to eliminate efficiency problems, both trivial and complex through the use of technology and from a ground up, first-principles approach, whenever suitable. this approach allows for exponential results rather than linear ones.',
  paragraphThree: 'my other interests: food and travel, cooking, basketball, blockchain, finance, geopolitics and history, reading, music',
  resume: 'https://drive.google.com/file/d/1y94jxQE1ExAbBj-4dssYi_kGmoNAVDgg/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'meid-eprac-screenshot.png',
    title: 'meid eprac',
    info: 'a simple browser extension which aims to help the user use their time in the best way they can through reminder of death.',
    info2: 'it also includes a habit tracker and a little weather widget.',
    url: '',
    repo: '',
  },
  {
    id: uuidv1(),
    img: 'work-in-progress.jpg',
    title: 'sellit (wip)',
    info: 'i was unable to get a h1b working visa to continue remaining in the US so i need to sell my large possessions so i can recoup some of the costs.',
    info2: 'my apartment uses buildinglink and the UX is not the greatest, so the goal here is to create this so i can sell my stuff.',
    url: 'https://www.github.com/davinchee',
    repo: '',
  },
  {
    id: uuidv1(),
    img: 'work-in-progress.jpg',
    title: 'network-donations (wip)',
    info: 'the inspiration for this idea came to me during the protests that spread throughout america in june after the killing of George Floyd.',
    info2: 'the idea is you will be able to make a donation which will generate a link which can be shared on social media and the ultimate goal is to increase the amount of donations by illustrating the power of networks through showing how much money your particular network has donated due to your link (and donation) or prior links.',
    url: '',
    repo: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'want to chat?',
  btn: 'contact me',
  email: 'thechee514@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/chee_kh_v',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/davinchee',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vincent-kh-chee/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/davinchee',
    },
    {
      id: uuidv1(),
      name: 'coffee',
      url: 'https://www.buymeacoffee.com/davinchee',
    },
    {
      id: uuidv1(),
      name: 'medium',
      url: 'https://medium.com/@dahvinchee',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
