import ExtLink from "@/components/ExtLink";
import PostsGrid from "@/components/PostsGrid";
import { getAllPosts, groupPostsByDate } from "@/lib/blog";
import { generateMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = generateMetadata({ title: "Blog" });

export default async function Page() {
  const posts = await getAllPosts();
  const organizedPosts = groupPostsByDate(posts);

  return (
    <section>
      <p className="mb-8">
        I occasionally pen down my thoughts on tech, and things I learn. All my
        shortform writing is hosted in a{" "}
        <Link href="https://www.github.com/AbhinRustagi/blog">
          Github Repository
        </Link>
        .
      </p>
      <PostsGrid organisedPosts={organizedPosts} />
    </section>
  );
}
