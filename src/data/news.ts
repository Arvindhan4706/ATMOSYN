export interface NewsPost {
  slug: string;
  title: string;
  /** ISO date, e.g. "2026-11-05" */
  date: string;
  category: "Announcement" | "Research" | "Milestone";
  excerpt: string;
  body: string[];
}

/**
 * Site news / build-in-public log.
 *
 * Intentionally empty: no updates are published until something real has
 * happened. The /news page shows an honest "under processing" state while
 * this array is empty.
 *
 * To publish an update, add it at the top of the array with today's ISO
 * date and keep every claim verifiable:
 *
 *   {
 *     slug: "my-real-update",
 *     title: "What actually happened",
 *     date: "2026-11-05",
 *     category: "Announcement",
 *     excerpt: "One-sentence factual summary.",
 *     body: ["Paragraph one.", "Paragraph two."],
 *   },
 */
export const newsPosts: NewsPost[] = [];
