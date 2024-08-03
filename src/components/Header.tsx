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
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1SDnEjHxBt19M41irzGY2BgKsU9uL6IEo/view?usp=sharing",
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
            const isActive =
              (pathname.startsWith(route.href) && route.href !== "/") ||
              (pathname === "/" && route.href === "/");

            return (
              <li key={route.name}>
                <Link
                  className={`uppercase text-sm ${
                    isActive ? "font-medium" : "font-light"
                  }`}
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
