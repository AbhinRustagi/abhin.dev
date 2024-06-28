import { generateMetadata } from "@/lib/metadata";
import data from "@/content/work.json";
import Link from "next/link";
import React from "react";

export const metadata = generateMetadata({ title: "Work" });

export default function Page() {
  return (
    <React.Fragment>
      <h2 className="text-2xl mb-4">Work Experience</h2>
      <ul className="pl-4 list-disc mb-8">
        {data.map((exp) => (
          <li className="mb-4" key={exp.org}>
            <Link className="underline text-blue-600" href={exp.website}>
              {exp.org}
            </Link>{" "}
            ({exp.duration}): {exp.description}
          </li>
        ))}
      </ul>
      <p>
        You can find my complete resume{" "}
        <Link className="underline text-blue-600" target="_blank" href="">
          here
        </Link>
        .
      </p>
    </React.Fragment>
  );
}
