import { generateMetadata } from "@/lib/metadata";
import data from "@/content/work.json";
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
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline"
              >
                <path
                  d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                  fill="currentColor"
                ></path>
              </svg>
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
