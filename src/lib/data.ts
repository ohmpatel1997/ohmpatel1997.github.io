export const PROFILE = {
  name: "Ohm Patel",
  title: "Software Consultant & Entrepreneur",
  tagline:
    "I help companies scale their most critical infrastructure. Blockchain nodes, ad pipelines, real-time order systems — I've built and shipped them all.",
  bio: [
    "I'm an independent software consultant and serial entrepreneur. I partner with companies — from high-growth startups to public tech giants — to architect, build, and scale their most complex backend systems. My clients include Coinbase, Reddit, and Deliveroo.",
    "My core expertise is in distributed systems, blockchain infrastructure, and high-throughput data pipelines. I've scaled platforms to process billions of transactions, built ad systems serving tens of millions of daily impressions, and architected real-time order systems for some of the world's largest restaurant chains.",
    "When I'm not shipping for clients, I build my own products. I co-founded YourStorage, a decentralized storage service that was acquired, and I actively contribute to open source projects in the IPFS and blockchain ecosystem.",
  ],
  image:
    "https://ca.slack-edge.com/T02NNTP35LJ-U0A6Z7CQ05U-5fc6c428ef0b-512",
  email: "ohm.patel1997@gmail.com",
  location: "Dubai",
  links: {
    github: "https://github.com/ohmpatel1997",
    twitter: "https://x.com/OhmPatel1997",
    medium: "https://medium.com/@ohm.patel1997",
  },
};

export const SKILLS = {
  technologies: [
    "Go",
    "TypeScript",
    "Rust",
    "gRPC",
    "IPFS",
    "libp2p",
    "go-ethereum",
    "Kafka",
    "PostgreSQL",
    "AWS",
    "Solidity",
    "Snowflake",
  ],
  domains: [
    "Blockchain",
    "Distributed Systems",
    "Ad Tech",
    "Fintech",
    "Product Development",
  ],
};

export interface Client {
  company: string;
  logo?: string;
  tagline: string;
  highlights: string[];
}

export const CLIENTS: Client[] = [
  {
    company: "Coinbase",
    logo: "logos/coinbase.png",
    tagline: "Scaling blockchain nodes & wallet infrastructure",
    highlights: [
      "Rearchitected infrastructure to scale blockchain nodes and wallets, improving Chainio and Nova services",
      "Chainio system now manages 4x transaction load from blockchain nodes",
      "Enabled BASE and SOLANA to support 1.5x transaction size and 4x transactions per block",
      "Reduced datastore requirements, saving $16,000/year per blockchain",
    ],
  },
  {
    company: "Reddit",
    logo: "logos/reddit.png",
    tagline: "Shopping Ads pipeline & infrastructure modernization",
    highlights: [
      "Led creation of Shopping Ads delivery pipeline handling 25M products and ~10M daily impressions, generating $30K revenue/day",
      "Re-architected pipeline reducing memory footprint by 50% while scaling product inventory substantially",
      "Built Product Frequency Cap system — increased CTR by 2% and purchase rates by ~10% for major advertisers",
      "Led Thrift-to-gRPC migration across Ads org, reducing request latency by 0.5%",
    ],
  },
  {
    company: "Deliveroo",
    logo: "logos/deliveroo.png",
    tagline: "Worldwide McDonald's & Subway order integration",
    highlights: [
      "Built worldwide McDonald's & Subway integration — real-time order processing handling 95,000 orders/day",
      "System processes 10% of Deliveroo's total daily order volume with 99.03% uptime",
      "Processes 22,000 daily restaurant menus from McDonald's worldwide",
      "Reduced order failures by 20% through scalable architecture designed to last 20+ years",
    ],
  },
  {
    company: "Wise",
    logo: "logos/wise.png",
    tagline: "Embedded finance platform from zero to scale",
    highlights: [
      "Founding engineer — designed auth system, KYC verification state machine, and intra-bank transfer system with double-entry bookkeeping",
      "Scaled platform to 150M+ API calls and 11B transactions processed",
    ],
  },
];

export interface Venture {
  name: string;
  tagline: string;
  highlights: string[];
}

export const VENTURES: Venture[] = [
  {
    name: "YourStorage",
    tagline: "Decentralized encrypted storage on IPFS",
    highlights: [
      "Built decentralized storage service with end-to-end encryption and zero vendor lock-in",
      "Scaled to ~90 paying customers and ~$30K ARR",
      "Acquired by a Canadian blockchain R&D company",
    ],
  },
  {
    name: "BhadePeDe",
    tagline: "Rental marketplace platform",
    highlights: [
      "Founded rental marketplace — built platform with Golang, GCP, and task queues",
      "Scaled to 600 paid customers and 300K INR revenue",
    ],
  },
];

export interface Project {
  name: string;
  description: string;
  url: string;
  language: string;
}

export const PROJECTS: Project[] = [
  {
    name: "double-entry-ledger",
    description:
      "Credit card transaction flow using TigerBeetle — demonstrating double-entry bookkeeping patterns for financial systems.",
    url: "https://github.com/ohmpatel1997/double-entry-ledger",
    language: "Go",
  },
  {
    name: "pay-later",
    description:
      "Fintech POC for Simpl enabling deferred payments — buy now, pay later infrastructure.",
    url: "https://github.com/ohmpatel1997/pay-later",
    language: "Go",
  },
  {
    name: "vwap",
    description:
      "Real-time volume-weighted average price calculator for cryptocurrency trading pairs.",
    url: "https://github.com/ohmpatel1997/vwap",
    language: "Go",
  },
];

export const OSS_CONTRIBUTIONS = [
  "IPFS Cluster",
  "Estuary (Application Research)",
  "AppBase",
];

export interface Talk {
  event: string;
  topic: string;
  type: string;
}

export const TALKS: Talk[] = [
  {
    event: "FilecoinDev 24",
    topic: "Decentralized Blockchain Storage Technology",
    type: "Conference Talk",
  },
  {
    event: "IPFS Camp 24",
    topic:
      "Day-to-Day Implications of Decentralized Blockchain Technology",
    type: "Conference Talk & Judge",
  },
  {
    event: "Blockchain Nigeria",
    topic: "Blockchain in Finance & Decentralized Intelligence",
    type: "Conference Talk & Panel Member",
  },
  {
    event: "GoUAE",
    topic: "Blockchain Storage Technology & Security",
    type: "Non-Profit Community Talk",
  },
];
