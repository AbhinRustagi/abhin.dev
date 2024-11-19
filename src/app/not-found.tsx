import Image from "next/image";
import Link from "next/link";
import NotFoundMeme from "@/public/404.jpg";
import React from "react";
import { Heading } from "@/components/Text";

export default function NotFound() {
  return (
    <section className="mt-16">
      <div className="flex gap-6 flex-wrap md:flex-nowrap">
        <div className="relative aspect-square rounded-lg overflow-hidden md:flex-1">
          <Image src={NotFoundMeme} alt="" />
        </div>
        <div className="md:flex-1">
          <Heading.H1>404: Not Found</Heading.H1>
          <p>Could not find requested resource</p>
          <Link href="/" className="underline mt-4 inline-block">
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}
