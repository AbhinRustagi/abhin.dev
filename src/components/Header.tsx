"use client";

import Link from "next/link";
import React from "react";
import { SlChemistry, SlHome, SlPencil, SlUser } from "react-icons/sl";

const navItems = [
  {
    title: "Home",
    href: "/",
    icon: SlHome,
  },
  {
    title: "Projects",
    href: "/work",
    icon: SlChemistry,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: SlPencil,
  },
  {
    title: "About",
    href: "/about",
    icon: SlUser,
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
      <header className="pb-6 flex items-center justify-between md:gap-0 gap-4 flex-wrap md:flex-nowrap">
        <div>
          <Link
            className="block py-3 px-5 rounded-md bg-neutral-100 border border-neutral-800 text-lg font-semibold text-neutral-800 font-mono hover:scale-95 transition-transform"
            href="/"
          >
            abhin.dev
          </Link>
        </div>
        <nav className="sticky top-0 overflow-hidden">
          <ul className="flex items-center justify-between gap-3">
            {navItems.map((item) => (
              <li
                key={item.title}
                className="hover:scale-95 w-16 h-16 aspect-square rounded-md border border-neutral-800 overflow-hidden hover:border-blue-300 transition-all hover:text-blue-300"
              >
                <Link
                  className="cursor-pointer text-xs transition-colors flex w-full h-full flex-col items-center justify-center"
                  href={item.href}
                >
                  {item.icon && <item.icon className="w-3 h-3 mb-2" />}
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
