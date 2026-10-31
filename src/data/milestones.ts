export interface Milestone {
  /** Period label — keep honest; use "Year" or "Month Year" precision only for events you can date. */
  period: string;
  title: string;
  description: string;
}

/**
 * Chronological record of verifiable organization events.
 * Only events with a documented basis belong here. When a milestone truly
 * happens (first cohort, first prototype, registration), add it with its date.
 */
export const milestones: Milestone[] = [
  {
    period: "2026",
    title: "Organization charter documented",
    description:
      "Eleven-member leadership structure and the three-pillar objective framework formally documented.",
  },
  {
    period: "2026",
    title: "Research framework published",
    description:
      "Five-stage research lifecycle defined, with three themes opened at hypothesis and literature-review stages.",
  },
  {
    period: "2026",
    title: "Initiative scopes defined",
    description:
      "Three exploratory initiatives written up with problem statements, proposed approaches, and honest status labels.",
  },
  {
    period: "October 2026",
    title: "Public website & inquiry portal",
    description:
      "Atmosyn.org goes live with a collaboration portal for students, researchers, and institutional partners.",
  },
];
