import { ASSETS } from './assets';

/**
 * Complete Portfolio Data & CMS Content for Chanchal's Design Portfolio.
 */

export const SITE_METADATA = {
  title: "Chanchal's Design Portfolio",
  description:
    'Multidisciplinary visual designer with 4+ years of experience crafting bold brand identities, high-impact campaigns, and digital experiences.',
  email: 'chanchalsdrafts@gmail.com',
  socialLinks: [
    { title: 'Behance', href: 'https://www.behance.net/chanchalverma' },
    { title: 'Instagram', href: 'https://www.instagram.com/chanchals.drafts/' },
    { title: 'LinkedIn', href: 'https://www.linkedin.com/in/chanchallverma/' },
  ],
};

export const HERO_CONTENT = {
  intro:
    "Hi hi, I'm Chanchal, a visual designer and strategist based out of Bangalore. I help startups and D2C brands impossible to scroll past through holistic design strategy, branding and social-first visuals.",
};

export const WORKS_DATA = [
  {
    id: 'DqCjowijc',
    slug: 'gully-labs',
    title: 'Gully Labs',
    client: 'Gully Labs',
    year: '2025-2026',
    category: 'Fashion',
    featured: true,
    nextWorkSlug: 'sleeplove',
    websiteUrl: '',
    description:
      'I designed meta ad campaigns, emails and web banners for Gully Labs. The campaigns took off the brand from 30L TO 2.5Cr MRR approximately over the course of 6 months.',
    deliverables: ['Meta Ads Campaigns', 'Web Banners', 'Email Design'],
    thumbnail: ASSETS.works.gullyLabs.thumbnail,
    images: {
      image2: ASSETS.works.gullyLabs.image2,
      image3: ASSETS.works.gullyLabs.image3,
      image4: ASSETS.works.gullyLabs.image4,
      image5: ASSETS.works.gullyLabs.image5,
      image6: ASSETS.works.gullyLabs.image6,
      image7: ASSETS.works.gullyLabs.image7,
    },
  },
  {
    id: 'McL8K2qhf',
    slug: 'sleeplove',
    title: 'Sleeplove',
    client: 'Sleeplove',
    year: '2025',
    category: 'Fashion & Lifestyle',
    featured: true,
    nextWorkSlug: 'shoreline-living',
    websiteUrl: '',
    description:
      "I led design for Sleeplove's marketing which included ads, emails, web banners, all aimed at growing the brand. I also pitched in on campaign brainstorms.",
    deliverables: ['Email Design', 'Meta Ads Campaigns', 'Web Banners'],
    thumbnail: ASSETS.works.sleeplove.thumbnail,
    images: {
      image2: ASSETS.works.sleeplove.image2,
      image3: ASSETS.works.sleeplove.image3,
      image4: ASSETS.works.sleeplove.image4,
      image5: null,
      image6: null,
      image7: null,
    },
  },
  {
    id: 'eqg8mRyaM',
    slug: 'shoreline-living',
    title: 'Shoreline Living',
    client: 'Shoreline Living',
    year: '2024',
    category: 'Home Furnishing',
    featured: true,
    nextWorkSlug: 'gfgf',
    websiteUrl: '',
    description:
      'Shoreline Living is an imaginary contemporary interior design brand inspired by sustainability. Using recycled materials like ocean plastics and glass, they create beautiful, eco-conscious furniture for urban folks who care about design as well as the planet.',
    deliverables: ['Branding'],
    thumbnail: ASSETS.works.shorelineLiving.thumbnail,
    images: {
      image2: ASSETS.works.shorelineLiving.image2,
      image3: ASSETS.works.shorelineLiving.image3,
      image4: ASSETS.works.shorelineLiving.image4,
      image5: ASSETS.works.shorelineLiving.image5,
      image6: ASSETS.works.shorelineLiving.image6,
      image7: ASSETS.works.shorelineLiving.image7,
    },
  },
  {
    id: 'zUp6NEJhX',
    slug: 'gfgf',
    title: 'GFGF',
    client: 'girlfriend girlfriend',
    year: '2025-2026',
    category: 'Queer Events',
    featured: true,
    nextWorkSlug: 'gully-labs',
    websiteUrl: '',
    description:
      'girlfriend girlfriend is party space for queer women, non-binary & trans people. Over the past year, I have worked closely with them to design some of their event posters. With loads of creative freedom to work with, I have been able to develop some amazing work for them!',
    deliverables: ['Event Collaterals'],
    thumbnail: ASSETS.works.gfgf.thumbnail,
    images: {
      image2: null,
      image3: null,
      image4: ASSETS.works.gfgf.image4,
      image5: null,
      image6: null,
      image7: ASSETS.works.gfgf.image7,
    },
  },
];

export const BRAND_LOGOS = [
  { id: 'logo-1', asset: ASSETS.logos.logo1, width: 74, height: 32, alt: 'Client Logo 1' },
  { id: 'logo-2', asset: ASSETS.logos.logo2, width: 92, height: 40, alt: 'Client Logo 2' },
  { id: 'logo-3', asset: ASSETS.logos.logo3, width: 100, height: 42, alt: 'Client Logo 3' },
  { id: 'logo-4', asset: ASSETS.logos.logo4, width: 92, height: 40, alt: 'Client Logo 4' },
  { id: 'logo-5', asset: ASSETS.logos.logo5, width: 84, height: 32, alt: 'Client Logo 5' },
];

export const ABOUT_CONTENT = {
  label: '( About me )',
  paragraphs: [
    '                                     My work sits at the intersection of art and design. I have never really shyed away from bringing my personality into my work. I think that\'s also something that keeps me sane. In words of great designers that came before me, design really is my "passion". Everything I do somehow connects back to my passion.',
    "As a queer person, I love working with queer brands, so if you're looking to build something fun yet meaningful, hit me up!",
  ],
  portraits: [ASSETS.about.portrait1, ASSETS.about.portrait2],
};

export const NUMBERS_DATA = [
  { id: 'SYneQY8AS', number: '50+', label: 'Projects' },
  { id: 'rItM9askV', number: '5+', label: 'Years experience' },
];

export const SERVICES_DATA = [
  { id: 'Ku2z3A5cz', title: 'Branding' },
  { id: 'gIX9CwRPX', title: 'SOCIAL MEDIA DESIGN' },
  { id: 'tAHHiPkmc', title: 'DESIGN STRATEGY' },
  { id: 'hnpPz2s9K', title: 'CREATIVE DIRECTION' },
];

export const WORK_EXPERIENCE_DATA = [
  { id: 'PLQWTo95E', role: 'Sr. Visual Designer', company: 'Porcellia', period: 'July 2025  - Now' },
  { id: 'ZarF2yHcR', role: 'Visual Designer', company: 'Visionet', period: 'Feb 2025 - Jun 2025' },
  { id: 'O1wNmvSkn', role: 'Lead Visual Designer', company: 'Kreatr', period: 'Mar 2023 - Jan 2025' },
  { id: 'SZI7jKEnu', role: 'Communications Designer', company: 'Palette69', period: 'Sep 2021 - Jul 2022' },
];

export const INFINITE_CANVAS_CARDS = [
  {
    id: 'nfNIF1CpX',
    title: 'Art by Ashima Raiza',
    size: 'Shot on iPhone',
    description:
      'I saw these photographs at an exhibition at Sabha, Blr in 2025 and it instantly made me happy at how well connected these photos are.',
    year: '2024',
    image: ASSETS.canvasCards.ashimaRaiza,
    left: '59%',
    top: '46%',
    width: '244px',
    zIndex: 1,
  },
  {
    id: 'UXijjcZXg',
    title: 'The Flower Spiral',
    size: 'Shot on iPhone',
    description: '',
    year: '2025',
    image: ASSETS.canvasCards.flowerSpiral,
    left: '50%',
    top: '2%',
    width: '212px',
    zIndex: 2,
  },
  {
    id: 'PTlZj6CWM',
    title: 'Another flower because why not',
    size: 'Shot on iPhone',
    description: '',
    year: '2023',
    image: ASSETS.canvasCards.anotherFlower,
    left: '72%',
    top: '61%',
    width: '273px',
    zIndex: 3,
  },
  {
    id: 'JCMYomfdq',
    title: 'Art by Gurdev Singh',
    size: 'Shot on iPhone',
    description:
      'Another set of art I saw at Sabha. Its amazing how colors can be played around with, endlessly.',
    year: '2025',
    image: ASSETS.canvasCards.gurdevSingh,
    left: '91%',
    top: '52%',
    width: '238px',
    zIndex: 4,
  },
  {
    id: 'Pnr4iOJr2',
    title: 'Art Piece at MAP, Bangalore',
    size: 'Shot on iPhone',
    description: '',
    year: '2024',
    image: ASSETS.canvasCards.mapBangalore,
    left: '21%',
    top: '12%',
    width: '162px',
    zIndex: 5,
  },
  {
    id: 'Gx3NwIyXD',
    title: 'Trees at Cubbon Park',
    size: 'Shot on iPhone',
    description: '',
    year: '2026',
    image: ASSETS.canvasCards.cubbonPark,
    left: '31%',
    top: '65%',
    width: '143px',
    zIndex: 6,
  },
  {
    id: 'CfFe96jm1',
    title: "A friend's house",
    size: 'Shot on iPhone',
    description: "I mean, isn't this just gorgeous?",
    year: '2025',
    image: ASSETS.canvasCards.friendsHouse,
    left: '19%',
    top: '81%',
    width: '256px',
    zIndex: 7,
  },
  {
    id: 'MlJxJuSnR',
    title: 'Jinx the Lifesaver',
    size: 'Shot on iPhone',
    description: '',
    year: '2026',
    image: ASSETS.canvasCards.jinxLifesaver,
    left: '3%',
    top: '34%',
    width: '174px',
    zIndex: 8,
  },
  {
    id: 'Z27Vklog8',
    title: 'A Diner near my house',
    size: 'Shot on iPhone',
    description: '',
    year: '2023',
    image: ASSETS.canvasCards.dinerNearHouse,
    left: '83%',
    top: '24%',
    width: '114px',
    zIndex: 9,
  },
];
