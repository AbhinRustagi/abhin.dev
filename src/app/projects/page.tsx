import { generateMetadata } from "@/lib/metadata";
import data from "@/content/projects.json";
import Link from "next/link";

export const metadata = generateMetadata({ title: "Projects" });

export default function Page() {
  const miniProjects = data.filter((project) => project.type === "mini");
  const bigProjects = data.filter((project) => project.type === "big");

  return (
    <>
      <h2 className="text-2xl mb-4">Big projects 🍗</h2>
      <ul className="list-disc pl-4">
        {bigProjects.map((project) => (
          <li
            key={`${project.type}-${project.title.toLowerCase()}`}
            className="mb-3"
          >
            <Link
              target={project.href && "_blank"}
              href={project.href || "#"}
              className="underline text-blue-600"
            >
              {project.title}
            </Link>
            :{" "}
            <div
              className="inline"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          </li>
        ))}
      </ul>
      <h2 className="text-2xl mt-8 mb-4">Bite-sized projects 🍪</h2>
      <ul className="list-disc pl-4">
        {miniProjects.map((project) => (
          <li
            key={`${project.type}-${project.title.toLowerCase()}`}
            className="mb-3"
          >
            <Link
              target={project.href && "_blank"}
              href={project.href || "#"}
              className="underline text-blue-600"
            >
              {project.title}
            </Link>
            : {project.description}
          </li>
        ))}
      </ul>
    </>
  );
}
