import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-t-gray-300 pt-10">
      <p className="mb-4">
        Thanks for stopping by! <br />I would love to hear from you. You can
        find me on email at{" "}
        <Link className="underline" href="mailto:hi@abhin.dev">
          hi@abhin.dev
        </Link>
        .
      </p>
      <p>
        You can also socialize with me elsewhere –{" "}
        <Link
          target="_blank"
          className="underline"
          href="https://www.linkedin.com/in/abhinrustagi"
        >
          LinkedIn
        </Link>
        ,{" "}
        <Link
          target="_blank"
          className="underline"
          href="https://www.github.com/AbhinRustagi"
        >
          Github
        </Link>{" "}
        &{" "}
        <Link
          target="_blank"
          className="underline"
          href="https://www.twitter.com/@abhinrustagi"
        >
          Twitter
        </Link>
        .
      </p>
    </footer>
  );
}
