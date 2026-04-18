import Resources from "@/views/Resources";
import { getAllBlogPostsMeta, getAllWritingsMeta } from "@/lib/content";

export const metadata = {
  title: "Resources & writing",
  description:
    "Curated learning links, articles, and technical notes — a hub for continuous learning.",
};

export default async function ResourcesPage() {
  const [blogPosts, writings] = await Promise.all([
    getAllBlogPostsMeta(),
    getAllWritingsMeta(),
  ]);

  return <Resources blogPosts={blogPosts} writings={writings} />;
}
