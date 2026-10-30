export interface ProjectItem {
  slug: string;
  title: string;
  pillarId: "climate-action" | "people-growth" | "research-innovation";
  pillarName: string;
  stage: "Exploration" | "Research Design" | "Active Planning";
  summary: string;
  problem: string;
  proposedApproach: string;
  expectedOutcomes: string[];
  currentStatus: string;
  verifiedNotes: string;
}

export const projects: ProjectItem[] = [
  {
    slug: "microclimate-telemetry-framework",
    title: "Microclimate & Canopy Telemetry Framework",
    pillarId: "research-innovation",
    pillarName: "Research and Innovation",
    stage: "Research Design",
    summary:
      "Exploratory architecture for low-power edge sensing nodes designed to monitor ambient microclimate variables in localized ecosystems.",
    problem:
      "Hyperlocal microclimate fluctuations often go undetected by coarse regional weather stations, impairing targeted ecological restoration and conservation responses.",
    proposedApproach:
      "Design resilient, low-power sensor telemetry topologies capable of continuous environmental logging (temperature, relative humidity, barometric pressure, soil moisture) with minimal energy footprints.",
    expectedOutcomes: [
      "Open hardware/software architectural blueprint",
      "Field-testable sensor node prototype",
      "Standardized data schema for microclimate observation",
    ],
    currentStatus:
      "Hardware selection and preliminary power-budget calculations in progress. No physical field deployment claims made at this stage.",
    verifiedNotes:
      "Exploratory research initiative within Pillar 3 (Research and Innovation).",
  },
  {
    slug: "collaborative-climate-mentorship",
    title: "Student Climate Innovation & Mentorship Protocol",
    pillarId: "people-growth",
    pillarName: "People and Collaborative Growth",
    stage: "Active Planning",
    summary:
      "A structured mentorship curriculum connecting engineering and science students with real-world climate challenge problem statements.",
    problem:
      "Students frequently encounter theoretical environmental studies without structured pathways to apply computational skills to tangible ecological problems.",
    proposedApproach:
      "Create modular learning sprints where students collaborate with mentors across software, hardware, and environmental strategy to analyze open climate datasets and develop testable concepts.",
    expectedOutcomes: [
      "Standardized workshop syllabus and project guides",
      "Cohort mentorship framework for multidisciplinary teams",
      "Repository of student-led exploratory prototypes",
    ],
    currentStatus:
      "Curriculum modules and mentorship guidelines currently in internal review. Pilot cohort scheduling to be announced upon confirmation.",
    verifiedNotes:
      "Directly implements Pillar 2 objective: 'Creating opportunities for students to gain practical experience.'",
  },
  {
    slug: "resource-circularity-benchmarking",
    title: "Institutional Resource Efficiency Benchmarking",
    pillarId: "climate-action",
    pillarName: "Climate Action and Sustainability",
    stage: "Exploration",
    summary:
      "Methodological framework for assessing resource flows, energy usage patterns, and circularity opportunities in educational and community facilities.",
    problem:
      "Institutions often lack accessible, transparent methodologies to measure waste generation and resource leakage before investing in costly mitigation programs.",
    proposedApproach:
      "Develop transparent auditing guidelines combining physical flow measurements with participatory tracking protocols to pinpoint high-impact intervention areas.",
    expectedOutcomes: [
      "Open-source audit template and metric guide",
      "Baseline assessment protocol for localized facilities",
      "Practical mitigation playbooks prioritized by feasibility",
    ],
    currentStatus:
      "Literature review and metric categorization underway. Focus on verifiable data collection standards.",
    verifiedNotes:
      "Directly addresses Pillar 1 objective: 'Developing solutions that promote resource efficiency and sustainability.'",
  },
];
