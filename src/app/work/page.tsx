import { generateMetadata } from "@/lib/metadata";
import data from "@/content/work.json";
import Link from "next/link";

export const metadata = generateMetadata({ title: "Work" });

export default function Page() {
  return (
    <>
      <h2 className="text-2xl mb-4">Work Experience</h2>
      <ul className="pl-4 list-disc">
        {data.map((exp) => (
          <li className="mb-4" key={exp.org}>
            <Link className="underline text-blue-600" href={exp.website}>
              {exp.org}
            </Link>{" "}
            ({exp.duration}): {exp.description}
          </li>
        ))}
      </ul>
    </>
  );
}
