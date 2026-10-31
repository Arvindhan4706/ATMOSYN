export interface NewsPost {
  slug: string;
  title: string;
  /** ISO date, e.g. "2026-10-31" */
  date: string;
  category: "Announcement" | "Research" | "Milestone";
  excerpt: string;
  body: string[];
}

/**
 * Site news / build-in-public log.
 * Add entries at the top with today's ISO date. Keep claims verifiable —
 * this feed replaces the marketing-style "news" most startups fake.
 */
export const newsPosts: NewsPost[] = [
  {
    slug: "atmosyn-launches-public-collaboration-portal",
    title: "Atmosyn opens its public collaboration portal",
    date: "2026-10-31",
    category: "Announcement",
    excerpt:
      "Our website is live with a direct inquiry channel for students, researchers, and institutional partners — and an honest description of where we actually are.",
    body: [
      "Today we are publishing the Atmosyn website, along with a collaboration inquiry portal that routes proposals directly to our coordination team. From the start, the site is explicit about our stage: early exploration and planning. We would rather describe exactly where we are than borrow the language of a company we have not become yet.",
      "The portal accepts collaboration proposals, student mentorship inquiries, and institutional discussions. Every submission is validated server-side, rate-limited, and delivered to our internal channel — no data is stored in a public database, and there are no tracking scripts or analytics cookies anywhere on this site.",
      "What you will find here is our operating framework: three documented pillars, three exploratory initiatives with clearly labeled stages, and three research themes sitting at hypothesis and literature-review levels. None of it is dressed up as completed work.",
      "If you want to build with us — as a student, mentor, or partner organization — the inquiry form is the fastest route. We review proposals periodically and respond to every serious message.",
    ],
  },
  {
    slug: "why-we-label-our-work-as-exploratory",
    title: "Why we label our work as exploratory",
    date: "2026-10-29",
    category: "Milestone",
    excerpt:
      "Every initiative on our site carries a stage label. Here is the reasoning behind publishing status instead of outcomes.",
    body: [
      "Climate and sustainability work suffers from a credibility problem: impressive claims that dissolve under questioning. Metrics without methodology, deployments that never happened, carbon savings that were never measured. We decided early that Atmosyn would not participate in that pattern.",
      "So every initiative we describe carries an explicit stage — Exploration, Research Design, or Active Planning — and every research theme states whether it sits at hypothesis, literature review, or protocol formulation. When a project has no field data, the page says so in plain language.",
      "This is not modesty for its own sake. It is a working standard: stakeholders, partners, and students can trust what they read because nothing is presented at a maturity it has not reached. As our work progresses, the labels will change with the evidence — and our news feed will record those transitions when they happen.",
      "You can read the full policy in the Scientific Integrity section of our About page. It binds us more tightly than any marketing claim would.",
    ],
  },
  {
    slug: "three-research-themes-now-open-for-contribution",
    title: "Three research themes now open for contribution",
    date: "2026-10-26",
    category: "Research",
    excerpt:
      "Low-power edge sensing, localized resource modeling, and participatory monitoring — our opening research agenda and the questions we are asking.",
    body: [
      "We have published our first research agenda as three themes, each with key questions and an explicit integrity note describing what has and has not been verified.",
      "The first theme investigates low-power edge architectures for environmental diagnostics — microcontroller and radio topologies that can log microclimate data off-grid for extended periods without maintenance cycles. It currently sits at protocol formulation.",
      "The second theme is a literature review on localized resource modeling and the energy-water nexus, synthesizing reproducible open-source methods for institutional resource consumption. The third explores participatory monitoring: community-operated sensing with peer-verification protocols strong enough to keep calibration honest.",
      "All three themes are deliberately pre-data. We are interested in collaborators who find that framing honest rather than limiting — students who want to work on genuinely open questions, and mentors who will insist on rigorous methods from the first experiment.",
    ],
  },
];
