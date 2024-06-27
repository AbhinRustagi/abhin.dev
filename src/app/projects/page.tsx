import { generateMetadata } from "@/lib/metadata";
import data from "@/content/projects.json";
import Link from "next/link";

export const metadata = generateMetadata({ title: "Projects" });

export default function Page() {
  return (
    <>
      <h2 className="text-xl mb-4">Big projects 🍗</h2>
      <ul></ul>
      <h2 className="text-xl my-4">Bite-sized projects 🍪</h2>
      <ul className="list-disc pl-4">
        {data.map((project) => (
          <li
            key={`${project.type}-${project.title.toLowerCase()}`}
            className="mb-3"
          >
            <Link href={project.href} className="underline text-blue-600">
              {project.title}
            </Link>
            : {project.description}
          </li>
        ))}
      </ul>
    </>
  );
}
