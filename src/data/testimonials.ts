// Updated testimonials: Corrected quotes for Blake Richardson and Zane Witherspoon, added Michael Jelen testimonial with avatar
// Changes: Blake's quote updated to reflect his actual testimonial, Zane's quote corrected, Michael Jelen added as new testimonial

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  gradient: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Luke Bateman',
    role: 'Founder in Residence',
    company: 'Arweave',
    content: "Mitchell is not only a great marketer and community builder, his ability to actualize is unparalleled. I've seen him build sand castles without water… just dry sand, through sheer force of will. I've seen Mitchell take quick jots and turn them into real products. He's one of the most creative thinkers I know—constantly pushing the next coolest thing. He crushes dev, marketing, design, and fundraising.",
    avatar: 'https://cdn.prod.website-files.com/66fadf41f73f5849260f608f/66fee971b66a1bb662fc635a_luke%20pfp.jpeg',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    id: '2',
    name: 'Blake Richardson',
    role: 'CEO',
    company: 'Superform',
    content: "Mitchell is someone I've known for a long time. He's not just looking for the quick win. He's values oriented and focused on a vision. He sees five steps ahead.",
    avatar: 'https://cdn.prod.website-files.com/66fadf41f73f5849260f608f/66fda879bf31fc5282e2bd3f_blake%20pfp.jpeg',
    gradient: 'from-blue-600 to-purple-600',
  },
  {
    id: '3',
    name: 'Zane Witherspoon',
    role: 'CEO',
    company: 'Superset',
    content: "Mitchell is a rare combination of deep thinker and action oriented. He's always got his eyes on the horizon for emerging opportunities, and he's got the creative capabilities to capitalize on them. Not to mention he's just such a genuinely good person.",
    avatar: 'https://cdn.prod.website-files.com/66fadf41f73f5849260f608f/6705bd1dd4e234bd21e7ca33_zane%20pfp.jpeg',
    gradient: 'from-pink-600 to-purple-600',
  },
  {
    id: '4',
    name: 'Michael Jelen',
    role: 'CEO',
    company: 'Replay Blockchain',
    content: "Working with Mitchell has shown me how deeply he engages with challenging problems. He approaches complexity with enthusiasm and a fresh mindset, always seeking to understand every detail. Mitchell knows exactly how to devise elegant solutions that make a meaningful difference in people's lives. His constant pursuit of excellence and his commitment to contributing positively to the world set him apart.",
    avatar: 'https://cdn.prod.website-files.com/66fadf41f73f5849260f608f/670d3af3a810006162e955bf_Jelly.jpg',
    gradient: 'from-green-600 to-blue-600',
  },
];
