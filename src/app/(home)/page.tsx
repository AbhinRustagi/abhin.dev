import Link from "next/link";

export default function Page() {
  return (
    <>
      <p className="mb-3">
        Hello, I&apos;m Abhin Rustagi, a postgraduate at the University of
        Melbourne, studying Artificial Intelligence.
      </p>
      <p className="mb-3">
        At UniMelb, I&apos;m currently a Project Lead at CISSA, one of the
        biggest CS clubs in Melbourne, contributing to a stealth project.
      </p>
      <p className="mb-3">
        Previously, I was a Software Engineer in the backend team at{" "}
        <Link
          className="text-blue-600 underline"
          href="https://www.openhouse.study/"
        >
          Openhouse
        </Link>
        . I have also worked part-time with{" "}
        <Link
          className="text-blue-600 underline"
          href="https://www.reworld.eco/"
        >
          ReWorld Earth
        </Link>
        , Sneaker Invest India, TimelyAI and Wetlands International.
      </p>
    </>
  );
}
