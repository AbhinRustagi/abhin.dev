import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-10">
      <div className="font-sans font-medium text-2xl mb-2">Abhin Rustagi</div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link className="" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="" href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="" href="/projects">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
