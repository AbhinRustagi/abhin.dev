import ExtLink from "@/components/ExtLink";
import data from "@/content/work.json";
import { generateMetadata } from "@/lib/metadata";
import Link from "next/link";
import React from "react";

export const metadata = generateMetadata({ title: "Work" });

export default function Page() {
  return (
    <React.Fragment>
      <h2 className="text-2xl mb-4">Work Experience</h2>
      <p className="my-4">
        On a mission to build and innovate products that users love. Here is a
        summary of my work so far.
      </p>
      <ul className="mb-8">
        {data.map((exp) => (
          <li
            className="[&:not(:last-child)]:mb-8 [&:not(:last-child)]:border-b [&:not(:first-child)]mt-8 pb-8 border-b-gray-800"
            key={exp.org}
          >
            <div>
              <Link target="_blank" href={exp.website}>
                {exp.org}
              </Link>{" "}
              <ExtLink />
            </div>
            <p>
              {exp.description} ({exp.duration})
            </p>
          </li>
        ))}
      </ul>
      <p>
        You can find my complete resume{" "}
        <Link target="_blank" href="">
          here
        </Link>
        .
      </p>
    </React.Fragment>
  );
}
