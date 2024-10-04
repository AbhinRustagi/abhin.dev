import Link from "next/link";
import React from "react";

const navItems = [
  {
    title: "About Me",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Resume",
    href: "",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Header() {
  return (
    <React.Fragment>
      <header className="pt-8 flex items-center justify-between">
        <div className="font-mono text-white text-xl text-accent">
          <Link href="/">Abhin Rustagi</Link>
        </div>
        <nav className="rounded-md border border-separator overflow-hidden">
          <ul className="flex items-center justify-between">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link
                  className="px-3 py-2 cursor-pointer text-sm block relative -bottom-px hover:bg-accent hover:text-background transition-colors"
                  href={item.href}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}
