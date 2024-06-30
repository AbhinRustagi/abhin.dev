import Card from "@/app/_components/Card";
import data from "@/content/projects.json";
import { generateMetadata } from "@/lib/metadata";
import React from "react";

export const metadata = generateMetadata({ title: "Projects" });

export default function Page() {
  const miniProjects = data.filter((project) => project.type === "mini");
  const bigProjects = data.filter((project) => project.type === "big");

  return (
    <React.Fragment>
      <section>
        <h2 className="text-2xl mb-8">Big projects 🍗</h2>
        <ul className="grid md:grid-rows-2 gap-4 md:grid-cols-2 grid-cols-1 relative h-full">
          {bigProjects.map((project) => (
            <li key={`${project.type}-${project.title.toLowerCase()}`}>
              <Card {...project} />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-2xl my-8">Bite-sized projects 🍪</h2>
        <ul className="pb-6 grid md:grid-rows-2 gap-4 md:grid-cols-2 grid-cols-1 relative h-full">
          {miniProjects.map((project) => (
            <li key={`${project.type}-${project.title.toLowerCase()}`}>
              <Card {...project} />
            </li>
          ))}
        </ul>
      </section>
    </React.Fragment>
  );
}
