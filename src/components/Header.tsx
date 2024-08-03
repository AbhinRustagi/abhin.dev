"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="mb-10 pb-6 border-b">
      <div className="text-4xl text-center mb-2 font-serif text-stone-900">
        Abhin Rustagi
      </div>
      <nav className="flex justify-center">
        <ul className="flex gap-4">
          {routes.map((route) => {
            const isActive = route.href.split("/")[1] == pathname.split("/")[1];

            return (
              <li key={route.name}>
                <Link
                  className={`uppercase text-sm ${isActive ? "font-bold" : ""}`}
                  href={route.href}
                >
                  {route.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
