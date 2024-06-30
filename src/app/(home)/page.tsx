import { getHomeData } from "@/lib/home";
import Link from "next/link";
import React from "react";
import { MdRenderer } from "../_components/MdRenderer/MdRenderer";
import Image from "next/image";

export default async function Page() {
  const content = await getHomeData();

  return (
    <React.Fragment>
      <div className="my-20 relative">
        <Image
          width={150}
          height={150}
          objectFit="cover"
          className="md:absolute md:-right-44 rounded border border-gray-800  object-cover"
          alt=""
          src="/abhin.jpg"
        />
        <MdRenderer content={content} />
      </div>
    </React.Fragment>
  );
}
