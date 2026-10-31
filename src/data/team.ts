export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "Leadership" | "Operations & Strategy" | "Technology & Research";
  initials: string;
  bio: string;
  linkedin?: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "jesi-solomon",
    name: "Jesi Anumitha Solomon",
    role: "Founder & Chief Executive Officer (CEO)",
    category: "Leadership",
    initials: "JS",
    bio: "Guides Atmosyn's organizational direction, scientific mission, and charter execution across all three pillars.",
  },
  {
    id: "dhurairaj-as",
    name: "Dhurairaj A S",
    role: "Co-Founder & Chief Operating Officer (COO)",
    category: "Leadership",
    initials: "DA",
    bio: "Directs internal operations, partner alignment, and multidisciplinary coordination across functional working groups.",
  },
  {
    id: "jotheeshwaran-b",
    name: "Jotheeshwaran B",
    role: "Chief Financial Officer (CFO)",
    category: "Leadership",
    initials: "JB",
    bio: "Manages financial governance, allocation frameworks, and resource stewardship for research programs.",
  },
  {
    id: "j-dallin-abishek",
    name: "J Dallin Abishek",
    role: "Head of Marketing & Communications",
    category: "Operations & Strategy",
    initials: "JA",
    bio: "Leads scientific communication, factual outreach, and documentation of public milestone announcements.",
  },
  {
    id: "arvindhan-sm",
    name: "Arvindhan S M",
    role: "Head of Digital Platforms & Project Development",
    category: "Technology & Research",
    initials: "AS",
    bio: "Oversees digital platforms architecture, project development workflows, and research infrastructure.",
  },
  {
    id: "michelle-p",
    name: "Michelle P",
    role: "Head of Research & Development",
    category: "Technology & Research",
    initials: "MP",
    bio: "Coordinates research methodology, scientific review procedures, and empirical validation frameworks.",
  },
  {
    id: "ks-rakshni",
    name: "K S Rakshni",
    role: "Head of Human Resources (HR)",
    category: "Operations & Strategy",
    initials: "KR",
    bio: "Facilitates team onboarding, student mentorship pairings, and internal collaborative culture.",
  },
  {
    id: "sagana-sri-s",
    name: "Sagana Sri S",
    role: "Head of Technology Development",
    category: "Technology & Research",
    initials: "SS",
    bio: "Architects sensor telemetry integrations, edge firmware prototypes, and technical tooling.",
  },
  {
    id: "vijay-sreeram",
    name: "Vijay Sreeram",
    role: "Head of Design & Creative Direction",
    category: "Operations & Strategy",
    initials: "VS",
    bio: "Drives visual systems, typographic identity, and human-centered design for digital tools.",
  },
  {
    id: "aswin-pandi-g",
    name: "Aswin Pandi G",
    role: "Head of Strategy & Planning",
    category: "Operations & Strategy",
    initials: "AP",
    bio: "Coordinates strategic roadmaps, research prioritization, and milestones tracking against the charter.",
  },
  {
    id: "sanjayan-a",
    name: "Sanjayan A",
    role: "Head of Project Management",
    category: "Operations & Strategy",
    initials: "SA",
    bio: "Maintains delivery cadences, sprint accountability, and inter-team operational checkpoints.",
  },
];
