export interface Milestone {
  /** Period label — only events with a documented basis belong here. */
  period: string;
  title: string;
  description: string;
}

/**
 * Chronological record of verifiable organization events.
 *
 * Dates are grounded in the organization charter document itself
 * (docs/Atmosyn.docx): authored 18 January 2026, last revised
 * 17 October 2026, by Jesi Anumitha Solomon (Founder & CEO).
 * Add entries only when something real happens.
 */
export const milestones: Milestone[] = [
  {
    period: "January 2026",
    title: "Organization charter documented",
    description:
      "Founding charter authored on 18 January 2026, defining the eleven-member leadership structure and the three-pillar objective framework.",
  },
  {
    period: "October 2026",
    title: "Charter revised through final review",
    description:
      "Leadership roles and pillar objectives finalized in the charter's last revision on 17 October 2026.",
  },
  {
    period: "October 2026",
    title: "Public website & inquiry portal",
    description:
      "Atmosyn.org goes live with the research framework, three documented initiative scopes, and a collaboration portal for students and partners.",
  },
];
