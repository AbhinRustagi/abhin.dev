"use client";

import { Heading } from "@/components/Text";
import { IPost } from "@/lib/blog";
import Link from "next/link";

export function About() {
  return (
    <div className="rounded-xl p-6 border border-neutral-800 bg-card">
      <Heading.H1>Hello, I&apos;m Abhin</Heading.H1>
      <p className="mb-4 text-sm text-neutral-500">pronounced /ab-hin/</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repudiandae
        perspiciatis consectetur, exercitationem quasi autem vero voluptatum.
        Sit consequatur odit nam pariatur, exercitationem, a hic, repellendus et
        molestiae quia itaque.
      </p>
      <div className="mt-3 rounded inline-block overflow-hidden border border-neutral-700 hover:bg-neutral-200 transition-colors hover:text-black">
        <Link href="/about" className="block py-1 px-2 text-sm">
          more about me
        </Link>
      </div>
    </div>
  );
}

export function Blog(props: { posts: IPost[] }) {
  return (
    <div className="p-4 rounded-xl border border-neutral-800 relative bg-card">
      <Heading.H1 className="mb-3">Writing</Heading.H1>
      <ul>
        {props.posts.map(({ metadata }) => (
          <li
            key={metadata.slug}
            className="text-sm rounded-md mb-2 border border-neutral-800 p-3 transition-colors hover:bg-neutral-200 cursor-pointer hover:text-background duration-200"
          >
            {metadata.title}
          </li>
        ))}
      </ul>
      <div className="mt-3 rounded inline-block overflow-hidden border border-neutral-700 hover:bg-neutral-200 transition-colors hover:text-black">
        <Link href="/blog" className="block p-1 px-2 text-sm">
          view all posts
        </Link>
      </div>
    </div>
  );
}

export function NowWidget() {
  return (
    <div className="p-6 flex-1 border rounded-xl border-neutral-800">
      <Heading.H2 className="mb-2 font-mono">now</Heading.H2>
      <ul className="list-disc pl-4">
        <li className="text-sm">
          Completing my Masters of IT (final sem, yay!) from the University of
          Melbourne
        </li>
      </ul>
      <div className="mt-3 rounded inline-block overflow-hidden border border-neutral-700 hover:bg-neutral-200 transition-colors hover:text-black">
        <Link href="/blog" className="block p-1 px-2 text-sm">
          /now
        </Link>
      </div>
    </div>
  );
}
