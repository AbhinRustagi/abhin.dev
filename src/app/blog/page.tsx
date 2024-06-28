import { getAllPosts, groupPostsByDate } from "@/lib/blog";
import { generateMetadata } from "@/lib/metadata";
import Link from "next/link";
import React from "react";

export const metadata = generateMetadata({ title: "Blog" });

export default async function Page() {
  const posts = await getAllPosts();
  const organizedPosts = groupPostsByDate(posts.reverse());

  return (
    <React.Fragment>
      <p className="mb-8">
        I occasionally pen down my thoughts on tech, and things I learn.
      </p>
      <ul>
        {organizedPosts.map((groupedPosts) => (
          <React.Fragment key={groupedPosts.date}>
            <div className="font-sans mb-2 text-neutral-500 uppercase text-sm">
              {groupedPosts.date}
            </div>
            {groupedPosts.posts.map((item) => (
              <li key={item.slug} className="mb-6">
                <div>
                  <Link className="underline" href={`/blog/${item.slug}`}>
                    {item.title}
                  </Link>
                </div>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </React.Fragment>
  );
}
