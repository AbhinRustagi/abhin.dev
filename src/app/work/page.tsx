import generateMetadata from "@/lib/metadata";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "Work",
  canonical: "/work",
});

export default function Work() {
  return (
    <>
      {/* <Projects /> */}
      <div className="mt-6 rounded-md p-6 border border-border">
        <h2 className="mb-2 lg:text-lg text-neutral-400">
          About my suite of personal projects
        </h2>
        <p className="text-sm text-neutral-500">
          I use the following projects regularly to automate different tasks,
          collect types of data for myself. I subscribe to (and try my best to
          apply) the concept of a{" "}
          <Link
            className="underline"
            href="https://www.buildingasecondbrain.com/"
          >
            Second Brain
          </Link>
          . That makes my notes app one of the frequently used ones on my
          devices. I regularly update these apps to my requirements, while also
          experimenting with newer software innovations.
        </p>
      </div>
    </>
  );
}
