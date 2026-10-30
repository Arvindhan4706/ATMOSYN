export interface ResearchTheme {
  id: string;
  title: string;
  category: string;
  status: "Hypothesis" | "Literature Review" | "Protocol Formulation";
  abstract: string;
  keyQuestions: string[];
  scientificIntegrityNote: string;
}

export const researchThemes: ResearchTheme[] = [
  {
    id: "edge-environmental-sensing",
    title: "Low-Power Edge Architectures for Environmental Diagnostics",
    category: "Hardware & Telemetry",
    status: "Protocol Formulation",
    abstract:
      "Investigating microcontroller architectures and ultra-low-power radio protocols capable of sustained off-grid data logging in remote microhabitats without recurrent maintenance cycles.",
    keyQuestions: [
      "What power harvesting topologies yield continuous uptime in variable canopy light?",
      "How can local edge outlier rejection prevent erroneous sensor spikes from entering downstream datasets?",
    ],
    scientificIntegrityNote:
      "Hypothesis stage. Field verification and hardware measurements will be published with raw calibration data once validated.",
  },
  {
    id: "computational-resource-modeling",
    title: "Localized Resource Modeling & Energy-Water Nexus Analysis",
    category: "Computational Modeling",
    status: "Literature Review",
    abstract:
      "Synthesizing contemporary methodologies for modeling resource consumption in distributed institutional ecosystems, focusing on reproducible open-source analytical models.",
    keyQuestions: [
      "Which mathematical models best capture transient consumption anomalies in community buildings?",
      "How can open climate datasets be calibrated against regional historical baselines?",
    ],
    scientificIntegrityNote:
      "Theoretical review. No proprietary algorithms or unverified efficiency savings are claimed.",
  },
  {
    id: "participatory-monitoring-systems",
    title: "Collaborative Data Protocols for Ecological Observation",
    category: "Socio-Technical Systems",
    status: "Hypothesis",
    abstract:
      "Exploring mechanisms for distributed, community-driven environmental observations that maintain high sensor calibration rigor while fostering student and community engagement.",
    keyQuestions: [
      "What peer-verification protocols prevent drift in community-operated sensing stations?",
      "How does hands-on data gathering influence organizational sustainability behaviors?",
    ],
    scientificIntegrityNote:
      "Exploratory framework in active design. Governed by Pillar 2's commitment to shared responsibility.",
  },
];
