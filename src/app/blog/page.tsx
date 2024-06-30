import { getAllPosts, groupPostsByDate } from "@/lib/blog";
import { generateMetadata } from "@/lib/metadata";
import Link from "next/link";
import React from "react";

export const metadata = generateMetadata({ title: "Blog" });

export default async function Page() {
  const posts = await getAllPosts();
  const organizedPosts = groupPostsByDate(posts);

  return (
    <section>
      <p className="mb-8">
        I occasionally pen down my thoughts on tech, and things I learn.
      </p>
      <ul>
        {organizedPosts.map((groupedPosts) => (
          <React.Fragment key={groupedPosts.date}>
            <div className="font-sans mb-2 text-sm">{groupedPosts.date}</div>
            {groupedPosts.posts.map((item) => (
              <li key={item.slug} className="mb-6">
                <div>
                  <Link className="font-medium" href={`/blog/${item.slug}`}>
                    {item.title}
                  </Link>
                </div>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
}
