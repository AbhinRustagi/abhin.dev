"use client";

import Link from "next/link";
import React from "react";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/work",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "About",
    href: "/about",
  },
  // {
  //   title: "Contact",
  //   href: "#contact",
  //   icon: SlBubbles,
  //   additionalProps: {
  //     onClick: () => {
  //       document.getElementById("contact")?.scrollIntoView({
  //         behavior: "smooth",
  //       });
  //     },
  //   },
  // },
];

export default function Header() {
  return (
    <React.Fragment>
      <header className="mb-12 flex items-center justify-between md:gap-0 gap-4 flex-wrap md:flex-nowrap">
        <div>
          <div className="relative">
            <Link
              className="block py-3 px-5 rounded-md bg-neutral-50 z-10 border border-border text-md font-semibold text-neutral-900"
              href="/"
            >
              abhin.dev
            </Link>
          </div>
        </div>
        <nav className="sticky top-0 overflow-hidden bg-background">
          <ul className="flex items-center justify-between rounded-md border-border border">
            {navItems.map((item) => (
              <li
                key={item.title}
                className="overflow-hidden hover:border-accent transition-all hover:text-title text-subtitle"
              >
                <Link
                  className="cursor-pointer py-2 px-4 text-sm transition-colors flex w-full h-full flex-col items-center justify-center"
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
