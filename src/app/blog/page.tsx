import { getIndex, groupPostsByDate } from "@/lib/blog";
import generateMetadata from "@/lib/metadata";
import Link from "next/link";
import React from "react";
import Button from "@/components/Button";

export const metadata = generateMetadata({
  title: "Blog",
  description: "Thoughts, ideas and opinions",
  canonical: "https://abhin.dev/blog",
});

export default async function Blog() {
  const posts = await getIndex();
  const organizedPosts = groupPostsByDate(posts);

  return (
    <React.Fragment>
      <div className="mb-8">
        <Button direction="backward" href="/" text="home" />
      </div>
      <section>
        <h1 className="mb-1">Blog</h1>
        <p className="text-subtitle">Thoughts, ideas and opinions</p>
        <div className="mt-10 md:mt-12">
          {organizedPosts.map((groupedPosts) => (
            <div key={groupedPosts.date}>
              <h2 className="mb-2 text-sm lg:text-base text-subtitle">
                {groupedPosts.date}
              </h2>
              <ul>
                {groupedPosts.posts.map((item) => (
                  <li key={item.slug} className="mb-6 lg:pl-4">
                    <div>
                      <Link href={`/blog/${item.slug}`} className="text-title">
                        {item.title}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}
