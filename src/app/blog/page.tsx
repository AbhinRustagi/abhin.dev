import PostsGrid from "@/components/PostsGrid";
import { getAllPosts, groupPostsByDate } from "@/lib/blog";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({ title: "Blog" });

export default async function Page() {
  const posts = await getAllPosts();
  const organizedPosts = groupPostsByDate(posts);

  return (
    <section>
      <p className="mb-8">
        I occasionally pen down my thoughts on tech, and things I learn.
      </p>
      <PostsGrid organisedPosts={organizedPosts} />
    </section>
  );
}
