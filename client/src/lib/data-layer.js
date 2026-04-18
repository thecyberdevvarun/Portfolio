/**
 * Data access layer — today reads static modules; later swap for fetch/DB.
 * Example: export async function getLearningResources() {
 *   const res = await fetch(`${process.env.API_URL}/resources`, { next: { revalidate: 3600 } });
 *   return res.json();
 * }
 */

import {
  learningResources,
  blogPosts,
  writings,
} from "@/data/resources";

export function getLearningResources() {
  return learningResources;
}

export function getBlogPosts() {
  return blogPosts;
}

export function getWritings() {
  return writings;
}
