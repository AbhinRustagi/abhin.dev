import { Heading } from "@/components/Text";
import { getIndex, groupPostsByDate } from "@/lib/blog";
import Link from "next/link";
import React from "react";

export default async function Blog() {
  const posts = await getIndex();
  const organizedPosts = groupPostsByDate(posts);

  return (
    <React.Fragment>
      <section className="py-20 md:py-24">
        <Heading.H1 className="mb-1">Blog</Heading.H1>
        <p>Thoughts, ideas and opinions</p>
        <div className="mt-10 md:mt-12">
          {organizedPosts.map((groupedPosts) => (
            <div key={groupedPosts.date}>
              <Heading.H2 className="font-mono mb-2 text-sm lg:text-base">
                {groupedPosts.date}
              </Heading.H2>
              <ul>
                {groupedPosts.posts.map((item) => (
                  <li key={item.slug} className="mb-6">
                    <div>
                      <Link href={`/blog/${item.slug}`}>{item.title}</Link>
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
