"use client";

import { GroupedPosts } from "@/lib/blog";
import Link from "next/link";
import React from "react";

interface PostsGridProps {
  organisedPosts: GroupedPosts[];
}

export default function PostsGrid(props: PostsGridProps) {
  return (
    <ul>
      {props.organisedPosts.map((groupedPosts) => (
        <React.Fragment key={groupedPosts.date}>
          <div className="font-sans mb-2 text-sm font-light">
            {groupedPosts.date}
          </div>
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
  );
}
