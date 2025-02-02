import Link from "next/link";
import { Heading } from "../Text";
import Testimony from "./Testimonial";

export const Content = () => {
  return (
    <>
      <div className="w-2/3 rounded-xl p-10 bg-card mb-12">
        <Heading.H1 className="text-xl mb-8">
          Software Engineer{" "}
          <span className="text-subtitle">
            with product intuition and acute curiosity.
          </span>
        </Heading.H1>
        <Heading.H2 className="uppercase text-sm lg:text-sm mb-2 text-subtitle">
          Journey so far
        </Heading.H2>
        <p className="mb-2">
          I was born and raised in New Delhi. Currently I reside in Melbourne,
          Australia. Prior to moving to Melbourne in 2023, I worked with various
          small and mid-size teams as a software engineer. I have worked at
          Openhouse, ReWorld Earth, Wetlands International, Virtetic, and more.
        </p>
        <p className="mb-2">
          I migrated to Melbourne to study a Masters of IT, and specialize in
          Artificial Intelligence. I completed a Bachelor of Science in
          Statistics from University of Delhi before this, sharpening my
          analytical and critical skills.
        </p>
        <p className="mb-4">
          When I&apos;m not working, you can usually find me reading up on
          variety of things (astrophysics, cricket, finance, ∞), going for
          hikes, or photographing natural landscapes.
        </p>
        {/* <Heading.H2 className="uppercase text-sm lg:text-sm mb-4 text-neutral-500">
          Going on right now
        </Heading.H2>*/}
        <Heading.H2 className="uppercase text-sm lg:text-sm mt-8 mb-2 text-subtitle">
          What I&apos;m Looking For
        </Heading.H2>
        <p>
          Impactful, purposeful work with a diverse team of talented people.
        </p>
        {/* <p className="my-16 font-mono font-bold flex items-center gap-2 text-neutral-100">
          You can view my resume <Link className="underline">here</Link>
          <SlLink className="h-4 w-4" />
        </p> */}
      </div>
      <div className="my-12">
        <Link
          href="https://drive.google.com/file/d/1yCCo55SJMuDMkvCu5if45Md-NAt9DRrs/view?usp=sharing"
          className="bg-accent rounded-md px-6 py-3 font-medium text-white"
        >
          Resume
        </Link>
      </div>
      <Heading.H2>Good folks I&apos;ve worked with</Heading.H2>
      <div className="mt-8 flex gap-6 flex-wrap lg:flex-nowrap">
        <Testimony
          message="Working with Abhin at Virtetic was an absolute pleasure. Abhin has flawless work ethic, he is an amazing team member, and his work is of the upmost quality."
          name="Ricardo Garcia Rosas – CEO Virtetic"
        />
        <Testimony
          message="Abhin is reliable, with strong ownership and passion. He is calm and can work under high pressure with crazy deadlines. He's got an amazing growth mindset and always looking for ways to improve."
          name="Prudhvi Dharmana – Founder ReWorld Earth"
        />
      </div>
    </>
  );
};
