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
    <header className="mb-10">
      <div className="font-semibold text-lg mb-2 text-gray-100">
        Abhin Rustagi
      </div>
      <nav>
        <ul className="flex gap-4">
          {routes.map((route) => {
            const isActive = route.href.split("/")[1] == pathname.split("/")[1];

            return (
              <li key={route.name}>
                <Link
                  className={`font-light ${
                    isActive ? "text-gray-200 font-medium" : "text-gray-400"
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
