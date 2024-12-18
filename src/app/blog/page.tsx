import { Heading } from "@/components/Text";
import { getIndex, groupPostsByDate } from "@/lib/blog";
import generateMetadata from "@/lib/metadata";
import Link from "next/link";
import React from "react";

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
      <section className="pt-10 md:pt-12">
        <Heading.H1 className="mb-1">Blog</Heading.H1>
        <p>Thoughts, ideas and opinions</p>
        <div className="mt-10 md:mt-12">
          {organizedPosts.map((groupedPosts) => (
            <div key={groupedPosts.date}>
              <Heading.H2 className="font-mono mb-2 text-sm lg:text-base text-neutral-600">
                {groupedPosts.date}
              </Heading.H2>
              <ul>
                {groupedPosts.posts.map((item) => (
                  <li key={item.slug} className="mb-6">
                    <div>
                      <Link
                        href={`/blog/${item.slug}`}
                        className="text-neutral-100 hover:underline"
                      >
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
