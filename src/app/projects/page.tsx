import { generateMetadata } from "@/lib/metadata";
import data from "@/content/projects.json";
import Link from "next/link";

export const metadata = generateMetadata({ title: "Projects" });

function Card({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <div className="card-base h-full">
      <div className="mb-2 h-8">
        <Link className="font-medium" target={href && "_blank"} href={href}>
          {title}
        </Link>
      </div>
      <div
        className="inline"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}

export default function Page() {
  const miniProjects = data.filter((project) => project.type === "mini");
  const bigProjects = data.filter((project) => project.type === "big");

  return (
    <>
      <h2 className="text-2xl mb-8">Big projects 🍗</h2>
      <ul className="grid md:grid-rows-2 gap-4 md:grid-cols-2 grid-cols-1 relative h-full">
        {bigProjects.map((project) => (
          <li key={`${project.type}-${project.title.toLowerCase()}`}>
            <Card {...project} />
          </li>
        ))}
      </ul>
      <h2 className="text-2xl my-8">Bite-sized projects 🍪</h2>
      <ul className="pb-6 grid md:grid-rows-2 gap-4 md:grid-cols-2 grid-cols-1 relative h-full">
        {miniProjects.map((project) => (
          <li key={`${project.type}-${project.title.toLowerCase()}`}>
            <Card {...project} />
          </li>
        ))}
      </ul>
    </>
  );
}
