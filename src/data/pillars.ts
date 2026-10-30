export interface PillarItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  objectives: string[];
  focusAreas: string[];
  iconName: "Leaf" | "Users" | "Cpu";
}

export const pillars: PillarItem[] = [
  {
    id: "climate-action",
    number: "01",
    title: "Climate Action and Sustainability",
    subtitle: "Ecological Stewardship & Resource Efficiency",
    description:
      "Addressing critical environmental dynamics through structured research, targeted resource conservation, and actionable sustainability frameworks.",
    objectives: [
      "Addressing real-world environmental and climate challenges",
      "Developing solutions that promote resource efficiency and sustainability",
      "Encouraging responsible and environmentally conscious practices",
    ],
    focusAreas: [
      "Ecological monitoring & baseline data analysis",
      "Circularity and material efficiency models",
      "Community environmental awareness and best practices",
    ],
    iconName: "Leaf",
  },
  {
    id: "people-growth",
    number: "02",
    title: "People and Collaborative Growth",
    subtitle: "Shared Responsibility & Mentorship",
    description:
      "Cultivating an open multidisciplinary culture where students, researchers, and technical professionals learn, mentor, and build practical capability together.",
    objectives: [
      "Building a collaborative culture based on shared responsibility",
      "Promoting continuous learning, mentorship, and skill development",
      "Creating opportunities for students to gain practical experience",
    ],
    focusAreas: [
      "Hands-on student research initiatives and workshops",
      "Cross-disciplinary mentorship and skill exchange",
      "Open collaboration protocols and shared learning resources",
    ],
    iconName: "Users",
  },
  {
    id: "research-innovation",
    number: "03",
    title: "Research and Innovation",
    subtitle: "Emerging Technologies for Climate Impact",
    description:
      "Bridging the divide between conceptual environmental science and emerging computational systems to test scalable, measurable solutions.",
    objectives: [
      "Exploring emerging technologies for climate-related applications",
      "Transforming promising ideas into practical, testable projects",
      "Developing scalable solutions with measurable environmental impact",
    ],
    focusAreas: [
      "Computational modelling of climate and ecological systems",
      "Low-power environmental sensing & telemetry systems",
      "Empirical testing frameworks for verified sustainability outcomes",
    ],
    iconName: "Cpu",
  },
];
