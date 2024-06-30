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
      <ul className="pb-4 border-b border-b-gray-700">
        {bigProjects.map((project) => (
          <li
            key={`${project.type}-${project.title.toLowerCase()}`}
            className="mb-6"
          >
            <div>
              <Link
                className="font-medium"
                target={project.href && "_blank"}
                href={project.href || "#"}
              >
                {project.title}
              </Link>
            </div>
            <div
              className="inline"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          </li>
        ))}
      </ul>
      <h2 className="text-2xl mt-12 mb-4">Bite-sized projects 🍪</h2>
      <ul className="mb-12">
        {miniProjects.map((project) => (
          <li
            key={`${project.type}-${project.title.toLowerCase()}`}
            className="mb-6"
          >
            <div>
              <Link
                target={project.href && "_blank"}
                href={project.href || "#"}
                className="font-medium"
              >
                {project.title}
              </Link>
            </div>
            <div
              className="inline"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
