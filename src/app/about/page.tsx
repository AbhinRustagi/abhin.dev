import { Heading } from "@/components/Text";
import Image from "next/image";
import React from "react";
import AboutImage from "@/public/about.jpg";

export default function AboutPage() {
  return (
    <React.Fragment>
      <section className="py-20 md:py-24">
        <Heading.H1 className="mb-8">
          I&apos;m a software engineer with 3 years of experience, with sharp
          product intuition, acute curiosity and diverse execution skills.
        </Heading.H1>
        <figure className="mb-8">
          <Image
            src={AboutImage}
            alt="Abhin Rustagi"
            className="rounded-md object-cover aspect-square md:aspect-video"
          />
          <figcaption className="text-center text-xs mt-2">
            @ Cape Schanck, Mornington Peninsula
          </figcaption>
        </figure>
      </section>
    </React.Fragment>
  );
}
