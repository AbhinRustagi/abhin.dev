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
        A software engineer passionate about creating impactful digital products
        that empower people and promote autonomy. I thrive in dynamic
        environments, blending creativity, collaboration, and meticulous
        attention to detail to craft solutions that resonate with users.
        Currently, I’m focused on AI, automation, and driving innovation. When
        I’m not building software, you’ll find me enjoying a good book, hiking
        trails, or savoring a great cup of coffee.
      </p>
      <div className="mt-3 rounded inline-block overflow-hidden border border-neutral-700 transition-colors hover:text-accent hover:border-accent">
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
          <li key={metadata.slug} className="">
            <Link
              className="block text-sm rounded-md mb-2 border border-neutral-800 p-3 transition-colors hover:bg-neutral-200 cursor-pointer hover:text-background duration-200"
              href={`/blog/${metadata.slug}`}
            >
              {metadata.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-3 rounded inline-block overflow-hidden border border-neutral-700 transition-colors hover:text-accent hover:border-accent">
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
      <div className="mt-3 rounded inline-block overflow-hidden border border-neutral-700 transition-colors hover:text-accent hover:border-accent">
        <Link href="/blog" className="block p-1 px-2 text-sm">
          /now
        </Link>
      </div>
    </div>
  );
}

export function LocationCard() {
  return (
    <div className="aspect-square p-2 flex-1 flex border rounded-xl border-neutral-800 flex-col justify-center items-center">
      {/* <Heading.H2 className="mb-2 font-mono">location</Heading.H2> */}
      <p className="text-sm text-neutral-100">📍 Melbourne</p>
      <p className="text-sm ">6:10 PM</p>
    </div>
  );
}

export function InProgress() {
  return (
    <div className="py-2 px-4 mb-6 border-dotted border-4 rounded-xl border-neutral-800">
      <p className="text-sm text-neutral-500 text-center">
        ⚒️ &nbsp;&nbsp; in progress; some things may break
      </p>
    </div>
  );
}
