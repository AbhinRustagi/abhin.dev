import { Heading } from "@/components/Text";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <section className="py-20 md:py-24">
        <Heading.H1 className="mb-8">
          Hello, I&apos;m Abhin – Software Engineer, Creative Thinker and Coffee
          Enthusiast
        </Heading.H1>
        <p className="mb-8">
          Currently based in Melbourne, I have spent approximately 3 years
          writing code for different organisations. I enjoy building software
          that simplifies tasks, creates impact and delivers value to people.
        </p>
        <p>
          Currently I am{" "}
          <ul className="pl-4 list-disc">
            <li>studying AI at the University of Melbourne</li>
            <li>interning at Virtetic as a VR Software Developer</li>
            <li>
              leading a project at CISSA (Melbourne&apos;s biggest student tech
              club)
            </li>
            <li>open to new opportunities!</li>
          </ul>
        </p>
      </section>
      <hr />
      <section className="py-20 md:py-24">
        <Heading.H1>Projects ⚖️</Heading.H1>
      </section>
      <hr />
    </React.Fragment>
  );
}
