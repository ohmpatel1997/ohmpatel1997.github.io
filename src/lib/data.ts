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
  role: string;
  duration: string;
  tagline: string;
  highlights: string[];
  logoOnly?: boolean;
}

export const CLIENTS: Client[] = [
  {
    company: "Coinbase",
    logo: "logos/coinbase.png",
    role: "Blockchain Engineer Consultant",
    duration: "May 2024 — Present",
    tagline: "Scaling blockchain nodes & wallet infrastructure",
    highlights: [
      "Rearchitected Chainio and Nova services — the core blockchain node indexing infrastructure that watches live blockchains and indexes transactions",
      "Chainio system now manages 4x transaction load from blockchain nodes",
      "Enabled BASE and SOLANA to support 1.5x transaction size and 4x transactions per block",
      "Led stakeholder communication, planning and execution of the entire scaling effort",
      "Reduced datastore requirements, saving $16,000/year per blockchain",
    ],
  },
  {
    company: "Reddit",
    logo: "logos/reddit.png",
    role: "Software Engineer",
    duration: "Oct 2022 — May 2024",
    tagline: "Shopping Ads pipeline & infrastructure modernization",
    highlights: [
      "Built the Shopping Ads delivery pipeline from scratch — 25M products, ~10M daily impressions, $30K revenue/day",
      "Re-architected pipeline with parallel processing and memory optimization — 50% memory reduction while scaling inventory",
      "Built Product Frequency Cap system — 2% CTR increase, ~10% purchase rate boost for advertisers like BrilliantEarth, Lenovo, HomeDepot",
      "Led Thrift-to-gRPC migration across Ads org — 0.5% latency reduction, improved service reliability during traffic spikes",
    ],
  },
  {
    company: "Deliveroo",
    logo: "logos/deliveroo.png",
    role: "Software Engineer",
    duration: "Jun 2021 — Sep 2022",
    tagline: "Worldwide McDonald's & Subway order integration",
    highlights: [
      "Built end-to-end McDonald's integration — orders from Deliveroo app transformed and injected directly into restaurant POS systems worldwide",
      "95,000 orders/day (44K from UK alone), 22,000 daily menu syncs, 99.03% uptime — handling 10% of Deliveroo's total daily volume",
      "Architecture designed for 20+ year lifespan at 4% annual growth — reduced order failures by 20%",
      "Delivered similar Subway integration handling 9,000 orders/day at 99.16% uptime",
    ],
  },
  {
    company: "Wise",
    logo: "logos/wise.png",
    role: "Founding Engineer",
    duration: "Mar 2020 — Jun 2021",
    tagline: "Embedded finance platform from zero to scale",
    highlights: [
      "Designed and built auth system, KYC verification state machine (Onfido), and intra-bank transfer system",
      "Implemented double-entry bookkeeping ledger for money transfers using QLDB",
      "Built caching systems for high-volume clients to retrieve transactions at scale",
      "Scaled platform to 150M+ API calls and 11B transactions processed — Go, TypeScript, Postgres, SQS, AWS",
    ],
  },
  {
    company: "EPAM",
    logo: "logos/epam.png",
    role: "",
    duration: "",
    tagline: "Global technology services & engineering",
    highlights: [],
    logoOnly: true,
  },
  {
    company: "Osmo",
    logo: "logos/osmo.png",
    role: "",
    duration: "",
    tagline: "Interactive learning & play platform",
    highlights: [],
    logoOnly: true,
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
    name: "polymarket-ai-bot",
    description:
      "AI-powered trading bot for Polymarket prediction markets — automated market analysis and execution.",
    url: "https://github.com/ohmpatel1997/polymarket-ai-bot",
    language: "Go",
  },
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
  {
    name: "RFC-Storage-Architecture",
    description:
      "RFC for end-to-end encrypted data storage on IPFS — bucket-based encryption with secure sharing and account recovery.",
    url: "https://github.com/ohmpatel1997/RFC-Storage-Architecture",
    language: "Markdown",
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
