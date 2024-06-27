import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-10">
      <div className="font-sans font-semibold text-2xl mb-2">Abhin Rustagi</div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
