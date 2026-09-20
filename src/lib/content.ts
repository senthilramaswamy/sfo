export interface Principle {
  position: number;
  title: string;
  description: string;
}

export interface Person {
  position: number;
  role: string;
  name: string;
  bio: string;
  image: string;
}

export interface Company {
  slug: string;
  sector: string;
  company: string;
  angle: string;
  writeup: string[];
  website: string | null;
  image: string;
}

export const principles: Principle[] = [
  {
    position: 1,
    title: 'Business quality',
    description: 'Strong competitive position, sound economics and room to compound.',
  },
  {
    position: 2,
    title: 'Capital allocation',
    description: 'Disciplined reinvestment, prudent balance sheets and sensible use of cash.',
  },
  {
    position: 3,
    title: 'Management & governance',
    description: 'Integrity, transparency and consistent execution across cycles.',
  },
  {
    position: 4,
    title: 'Growth runway',
    description: 'Long runways for growth mean decades of compounding ahead.',
  },
];

export const people: Person[] = [
  {
    position: 1,
    role: 'Founder',
    name: 'Sanjay Jain',
    bio: 'Four decades of experience investing in Indian equities across multiple business and market cycles, with an emphasis on business quality, management integrity, financial discipline and patient ownership.',
    image: '/images/founders/sanjay-jain.jpg',
  },
  {
    position: 2,
    role: 'Chief Investment Officer',
    name: 'Manas Jain',
    bio: 'Leads investment research, portfolio construction and company engagement for the family office from Chennai. Prior to this, Manas worked as a Research Analyst in the Quantitative Strategies Group at Sage Advisory Services, a $25 billion investment management firm based in Austin, Texas. He holds a Master\u2019s in Financial Engineering from UCLA Anderson School of Management and a Bachelor\u2019s in Industrial Engineering from the College of Engineering, Guindy.',
    image: '/images/founders/manas-jain.jpg',
  },
];

export const companies: Company[] = [
  {
    slug: 'mm-forgings',
    sector: 'Engineering · Auto Components',
    company: 'MM Forgings Limited',
    angle: 'Engineering and auto-component manufacturer serving demanding industrial applications.',
    writeup: [
      'MM Forgings Limited is an engineering and auto-component business included in our selected company research.',
      'Our work focuses on the durability of its customer relationships, manufacturing capabilities, operating economics and the long-term demand outlook for the markets it serves.',
    ],
    website: 'https://www.mmforgings.com',
    image: '/images/companies/mm-forgings.png',
  },
  {
    slug: 'rolex-rings',
    sector: 'Bearing',
    company: 'Rolex Rings Pvt. Ltd.',
    angle: 'Bearing-ring manufacturer with an engineering-led position in automotive and industrial supply chains.',
    writeup: [
      'Rolex Rings Pvt. Ltd. is a bearing-ring manufacturer included in our selected company research.',
      'We study the company through its manufacturing quality, customer relationships, product mix and ability to build a durable position across its end markets.',
    ],
    website: 'https://www.rolexrings.com',
    image: '/images/companies/rolex-rings.png',
  },
  {
    slug: 'karur-vysya-bank',
    sector: 'Financials · Private Sector Bank',
    company: 'Karur Vysya Bank',
    angle: 'Private-sector bank with a focused franchise across lending, deposits and customer relationships.',
    writeup: [
      'Karur Vysya Bank is a private-sector bank included in our selected company research.',
      'Our research considers the quality of its deposit franchise, lending discipline, operating efficiency and the scope for responsible long-term growth.',
    ],
    website: 'https://www.kvb.bank.in',
    image: '/images/companies/karur-vysya-bank.png',
  },
  {
    slug: 'federal-bank',
    sector: 'Financials · Private Sector Bank',
    company: 'Federal Bank',
    angle: 'Private-sector bank building a broader financial-services franchise with a focus on disciplined growth.',
    writeup: [
      'Federal Bank is a private-sector bank included in our selected company research.',
      'We follow the bank’s customer franchise, deposit growth, credit culture and ability to compound responsibly through different market conditions.',
    ],
    website: 'https://www.federalbank.co.in',
    image: '/images/companies/federal-bank.png',
  },
  {
    slug: 'uniparts-india',
    sector: 'Auto Components · Off-Highway Vehicles',
    company: 'Uniparts India',
    angle: 'Specialist supplier serving the global off-highway vehicle and equipment ecosystem.',
    writeup: [
      'Uniparts India is an auto-components business serving off-highway vehicle applications and included in our selected company research.',
      'We examine its product position, customer relationships, geographic reach and the long-term opportunity in the equipment markets it supplies.',
    ],
    website: 'https://www.unipartsgroup.com',
    image: '/images/companies/uniparts-india.png',
  },
  {
    slug: 'menon-bearings',
    sector: 'Auto Components & Bearings',
    company: 'Menon Bearings',
    angle: 'Bearing and auto-component manufacturer with an engineering-focused product portfolio.',
    writeup: [
      'Menon Bearings is an auto-components and bearings business included in our selected company research.',
      'Our work considers its product capabilities, customer base, manufacturing economics and the potential for steady growth in the markets it serves.',
    ],
    website: 'https://menonbearings.in',
    image: '/images/companies/menon-bearings.png',
  },
  {
    slug: 'deepak-fertilisers',
    sector: 'Chemicals · Fertilisers & Industrial Chemicals',
    company: 'Deepak Fertilisers',
    angle: 'Chemicals and fertilisers producer serving agricultural and industrial end markets.',
    writeup: [
      'Deepak Fertilisers is a chemicals and fertilisers business included in our selected company research.',
      'We study the balance between product demand, manufacturing capabilities, input costs, capital allocation and the long-term development of its end markets.',
    ],
    website: 'https://www.dfpcl.com',
    image: '/images/companies/deepak-fertilisers.png',
  },
  {
    slug: 'bharat-forge',
    sector: 'Engineering · Auto Components',
    company: 'Bharat Forge',
    angle: 'Engineering and forging company with exposure to automotive and industrial applications.',
    writeup: [
      'Bharat Forge is an engineering and auto-components business included in our selected company research.',
      'Our research follows its engineering depth, customer relationships, end-market mix and ability to create value through disciplined investment over a full cycle.',
    ],
    website: 'https://www.bharatforge.com',
    image: '/images/companies/bharat-forge.png',
  },
  {
    slug: 'mahindra-and-mahindra',
    sector: 'Automobiles · SUVs & Tractors',
    company: 'Mahindra & Mahindra',
    angle: 'Automotive and farm-equipment company with a broad presence across SUVs and tractors.',
    writeup: [
      'Mahindra & Mahindra is an automobile business with exposure to SUVs and tractors, included in our selected company research.',
      'We assess its brands, product pipeline, competitive position, execution and the long-term demand drivers across its core categories.',
    ],
    website: 'https://www.mahindra.com',
    image: '/images/companies/mahindra-and-mahindra.png',
  },
  {
    slug: 'astra-microwave-products',
    sector: 'Leader in RF & Microwave Technologies',
    company: 'Astra Microwave Products',
    angle: 'Technology business focused on radio-frequency and microwave systems and applications.',
    writeup: [
      'Astra Microwave Products is an RF and microwave technology business included in our selected company research.',
      'Our work considers its technical capabilities, project execution, customer relationships and the opportunity created by long-term demand for specialised systems.',
    ],
    website: 'https://astramwp.com',
    image: '/images/companies/astra-microwave-products.png',
  },
];

export function getCompanyBySlug(slug: string): Company | undefined {
  return companies.find((c) => c.slug === slug);
}
