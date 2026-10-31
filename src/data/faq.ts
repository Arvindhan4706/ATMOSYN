export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "How do students join Atmosyn?",
    answer:
      "Submit an inquiry through the collaboration form and select your area of interest. Our student climate mentorship protocol is currently in internal review — pilot cohort scheduling will be announced on this site once confirmed.",
  },
  {
    question: "What stage is your work at, really?",
    answer:
      "Every initiative on the site carries a stage label: Exploration, Research Design, or Active Planning. We have not deployed field hardware or published datasets, and we say so directly on each project page rather than implying results that do not exist yet.",
  },
  {
    question: "Are there paid positions or stipends?",
    answer:
      "We do not have open paid positions at this time. As funding and projects solidify, roles will be listed on this page. General applications are always welcome through the inquiry form.",
  },
  {
    question: "How long does a response take?",
    answer:
      "There is no ticketing system behind the form yet — a functional lead reads each inquiry personally, so response time depends on review load rather than a published SLA. We would rather leave this unanswered than quote a turnaround we cannot guarantee.",
  },
  {
    question: "Where do I find your published research?",
    answer:
      "Nowhere yet — and we will not pretend otherwise. We have no peer-reviewed publications or datasets at this stage. When reproducible results exist, open-access reports and repositories will be linked from the Research page and announced in our news feed.",
  },
  {
    question: "Can institutions formally partner with Atmosyn?",
    answer:
      "Yes, through the collaboration inquiry portal. Select 'General Institutional Inquiry' and describe the proposed scope. Proposals are reviewed periodically by our coordination team, and we respond to every serious message.",
  },
];
