import Button from "@/components/Button";
import { Content } from "@/components/Cards/About";
import generateMetadata from "@/lib/metadata";
import React from "react";

export const metadata = generateMetadata({
  title: "About Me",
  description:
    "I'm a software engineer with 3 years of experience, product intuition and acute curiosity.",
  canonical: "/about",
});

export default function AboutPage() {
  return (
    <React.Fragment>
      <div className="mb-8">
        <Button direction="backward" text="home" href="/" />
      </div>
      <Content />
    </React.Fragment>
  );
}
