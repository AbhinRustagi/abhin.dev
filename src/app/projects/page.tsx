import Card from "@/components/Card";
import data from "@/content/projects.json";
import { generateMetadata } from "@/lib/metadata";
import { IProject, projectSections } from "@/lib/project";
import React from "react";

export const metadata = generateMetadata({ title: "Projects" });

export default function Page() {
  return (
    <React.Fragment>
      {Object.entries(projectSections).map(([key, title]) => {
        const projects = data.filter(
          (project) => project.type === key
        ) as IProject[];

        return (
          <section key={key} className="[&:not(:last-child)]:mb-12">
            <h2 className="text-2xl mb-8">{title}</h2>
            <ul className="grid md:grid-rows-2 gap-4 md:grid-cols-2 grid-cols-1 relative h-full">
              {projects.map((project) => (
                <li key={`${project.type}-${project.title.toLowerCase()}`}>
                  <Card {...project} />
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </React.Fragment>
  );
}
