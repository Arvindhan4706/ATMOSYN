import { z } from "zod";

/**
 * Shared validation schemas for Atmosyn form endpoints.
 * Kept in one place so the API contract can be reused (e.g. by future
 * client-side pre-validation or by tests).
 */

export const inquirySchema = z.object({
  fullName: z.string().trim().min(2, "Full name must be at least 2 characters."),
  email: z.string().trim().email("Please provide a valid email address."),
  affiliation: z
    .string()
    .trim()
    .min(2, "Please share your university, organization, or independent background."),
  pillarInterest: z.enum([
    "climate-action",
    "people-growth",
    "research-innovation",
    "general-inquiry",
  ]),
  message: z
    .string()
    .trim()
    .min(15, "Please provide at least 15 characters detailing your inquiry or proposal.")
    .max(5000, "Please keep your inquiry under 5000 characters."),
  /**
   * Honeypot field. Legitimate users never see or fill this input; spam bots
   * routinely do. The field is optional so older cached forms still validate,
   * but any non-empty value silently disqualifies the submission.
   */
  website: z.string().optional(),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
