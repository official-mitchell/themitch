export interface ResumeExperience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface ResumeEducation {
  degree: string;
  school: string;
  location: string;
  graduationDate: string;
  details: string[];
}

export interface ResumeSkillCategory {
  category: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  website: string;
  profile: string;
  experience: ResumeExperience[];
  education: ResumeEducation[];
  skills: ResumeSkillCategory[];
  other: {
    title: string;
    items: string[];
  }[];
}

export const resumeData: ResumeData = {
  name: "Mitchell Opatowsky",
  title: "Full-Stack Engineer & Technical Product Manager",
  email: "mitchell@themitch.dev",
  phone: "+1 (512) 555-0123",
  website: "themitch.dev",
  profile:
    "Accomplished full-stack engineer and technical product manager with 9+ years of experience building and scaling innovative products in Web3, SaaS, and fintech. Proven track record of leading cross-functional teams, raising capital, and delivering measurable business impact through strategic product decisions and technical execution.",
  experience: [
    {
      title: "Full-Stack Engineering & Technical Product Manager",
      company: "Superform Inc.",
      location: "Remote",
      startDate: "November 2023",
      endDate: "October 2024",
      description: [
        "Conceptualized and built a Telegram-based AI portfolio agent. Stack: TypeScript/Node.js with PostgreSQL, Knex.js, Telegraf.js, and custom middleware.",
        "Accessed Superform API and on-chain data to recommend top-performing vaults & conducted API client prospecting.",
        "Executed cross-protocol competitor market analysis in DeFi Data APIs and yield execution to validate differentiation.",
        "Positioned Piggy as a demand-side TVL acquisition and protocol growth vehicle.",
      ],
    },
    {
      title: "Cofounder, Head of Product & Sales",
      company: "Thorium Development Group",
      location: "Austin, TX",
      startDate: "April 2023",
      endDate: "October 2023",
      description: [
        "Spearheaded and led GTM strategy for the international relaunch and protocol rollout for Dexible post-acquisition. Initiated and led sales pipeline to procure new dev contracts worth $200k in 5 months.",
        "Coordinated blockchain team efforts to reduce on-chain order evaluation state errors by 40%.",
        "Assisted the backend team in diagnosing gas overage errors, reducing failed transactions by 65%.",
      ],
    },
    {
      title: "Cofounder, Head of Product",
      company: "Dexible",
      location: "Austin, TX",
      startDate: "November 2020",
      endDate: "April 2023",
      description: [
        "Led efforts to raise $150k angel round and $1.5 million pre-seed round to acquisition. Led and designed an economic reward incentive program. Developed token models for inflation, emission, burn.",
        "Orchestrated a major product launch and achieved 15% improvement in CSAT. Coincided with a custom-built referral marketing program, reducing CPA by 35%.",
        "Led 15 person cross-functional team across engineering, sales, and marketing using Agile Scrum, successfully launching four major product updates ahead of schedule and under budget, saving approximately $300k in development costs.",
        "Led the frontend team's efforts to account for complex on-chain order states. Spearheaded sales strategy to acquire 15 hedge fund customers within the first year, generating $500m in trade volume.",
        "Prioritized and led 2-week sprint cycles, resulting in a 35% faster cycles and 30% improvement for customer satisfaction.",
        "Analyzed user behavior data to guide a major web app UX overhaul, which led to a 70% reduction in trader order abandonment and increased average trade order value by 18%.",
        "Organized a sales strategy for integrations using widgets and iFrames to secure 3 major clients. Revamped Dexible API to support these clients, leading to a 25% boost in created orders.",
      ],
    },
    {
      title: "Cofounder, Frontend Developer",
      company: "BUIDLHub",
      location: "New York, NY",
      startDate: "June 2019",
      endDate: "November 2020",
      description: [
        "Designed pre-built recipes for notifications and state changes.",
        "Identified and diagnosed frontend errors to decrease abandonment by 20%.",
        "Coordinated launches with relevant protocols & achieved a 30% improvement in DAU.",
        "Coordinated with Bankless & POAP to develop the first on-chain-driven role management system with NFTs.",
      ],
    },
    {
      title: "Cofounder, Head of Product",
      company: "CryptoPets",
      location: "New York, NY",
      startDate: "December 2017",
      endDate: "October 2018",
      description: [
        "Closed $150k in angel funding. Conducted industry, competitive, and customer analyses to inform the positioning of products to support transition in sales structure.",
        "Designed and managed the development of the frontend screener dashboard and gathered analytics for reports.",
      ],
    },
    {
      title: "Cofounder, Product Growth Manager",
      company: "Coinscore",
      location: "Washington, D.C.",
      startDate: "July 2017",
      endDate: "March 2018",
      description: [
        "Closed $150k in angel funding. Conducted industry, competitive, and customer analyses to inform the positioning of products to support transition in sales structure.",
        "Designed and managed the development of the frontend screener dashboard and gathered analytics for reports.",
      ],
    },
    {
      title: "Cofounder, CEO",
      company: "Servify",
      location: "Washington, D.C.",
      startDate: "December 2015",
      endDate: "March 2017",
      description: [
        "Conducted customer discovery research with 60 local nonprofits to prioritize application features.",
        "Participated in the GW Entrepreneurship Program annual pitch competition in 2016 and 2017.",
      ],
    },
  ],
  education: [
    {
      degree: "BS International Economics & BA Geographic Information Systems",
      school: "George Washington University",
      location: "Washington, D.C.",
      graduationDate: "May 2019",
      details: [
        "Graduated with Honors, GPA 3.8/4.0",
        "Minor in Business Administration",
      ],
    },
  ],
  skills: [
    {
      category: "Strategic",
      skills: [
        "Venture Fundraising",
        "GTM Strategy",
        "Agile & Scrum",
        "Product Lifecycle",
        "Product Ops",
        "Sprint Planning",
        "A/B Testing",
      ],
    },
    {
      category: "Development",
      skills: [
        "React.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Microservices",
        "Docker",
        "Jenkins",
      ],
    },
    {
      category: "Technical",
      skills: [
        "SQL",
        "Python",
        "PyTorch",
        "Scikit-learn",
        "AWS SDK & Lambda",
        "Grafana & Elasticsearch",
        "Nx Monorepo",
      ],
    },
    {
      category: "Design & UX",
      skills: [
        "Figma",
        "Wireframing & Prototyping",
        "Usability Testing",
        "Adobe Illustrator",
        "Adobe Photoshop",
      ],
    },
    {
      category: "Tools & Software",
      skills: [
        "JIRA",
        "Clickup",
        "Confluence",
        "Google Analytics",
        "Ahrefs",
        "Mailchimp",
        "Shopify",
      ],
    },
  ],
  other: [
    {
      title: "Leadership Programs",
      items: ["Graduate from Creative Destructive Labs accelerator"],
    },
    {
      title: "Hackathons",
      items: [
        "ETH Denver Mentor 2022 & 2023",
        "Hackmoney 2021 Participant",
        "HackFS 2021 Participant",
        "Microsoft Hackathon 2021",
        "ETH Denver 2020 Medalist",
        "Consensys Hacks 2019 Finalist",
      ],
    },
    {
      title: "Volunteering",
      items: [
        "ATX DAO Hackathon mentor",
        "ATX DAO Avalanche Artist Residency",
        "ATX DAO REP Project",
      ],
    },
    {
      title: "Interests",
      items: [
        "Roadtrips",
        "Avid Snowboarder & Skier",
        "Tennis & Padel",
        "Breathwork & Yoga",
        "Master Event & Community Organizer",
      ],
    },
  ],
};
