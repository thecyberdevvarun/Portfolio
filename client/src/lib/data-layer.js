/**
 * Client-safe data access (no Node fs).
 * For Markdown content, import from `@/lib/content` in Server Components or Route Handlers only.
 */

import { learningResources } from "@/data/resources";

export function getLearningResources() {
  return learningResources;
}
