export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "Leadership" | "Operations & Strategy" | "Technology & Research";
}

export const teamMembers: TeamMember[] = [
  {
    id: "jesi-solomon",
    name: "Jesi Anumitha Solomon",
    role: "Founder & Chief Executive Officer (CEO)",
    category: "Leadership",
  },
  {
    id: "dhurairaj-as",
    name: "Dhurairaj A S",
    role: "Co-Founder & Chief Operating Officer (COO)",
    category: "Leadership",
  },
  {
    id: "jotheeshwaran-b",
    name: "Jotheeshwaran B",
    role: "Chief Financial Officer (CFO)",
    category: "Leadership",
  },
  {
    id: "j-dallin-abishek",
    name: "J Dallin Abishek",
    role: "Head of Marketing & Communications",
    category: "Operations & Strategy",
  },
  {
    id: "arvindhan-sm",
    name: "Arvindhan S M",
    role: "Head of Digital Platforms & Project Development",
    category: "Technology & Research",
  },
  {
    id: "michelle-p",
    name: "Michelle P",
    role: "Head of Research & Development",
    category: "Technology & Research",
  },
  {
    id: "ks-rakshni",
    name: "K S Rakshni",
    role: "Head of Human Resources (HR)",
    category: "Operations & Strategy",
  },
  {
    id: "sagana-sri-s",
    name: "Sagana Sri S",
    role: "Head of Technology Development",
    category: "Technology & Research",
  },
  {
    id: "vijay-sreeram",
    name: "Vijay Sreeram",
    role: "Head of Design & Creative Direction",
    category: "Operations & Strategy",
  },
  {
    id: "aswin-pandi-g",
    name: "Aswin Pandi G",
    role: "Head of Strategy & Planning",
    category: "Operations & Strategy",
  },
  {
    id: "sanjayan-a",
    name: "Sanjayan A",
    role: "Head of Project Management",
    category: "Operations & Strategy",
  },
];
