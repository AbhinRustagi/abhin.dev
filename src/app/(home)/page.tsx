import { getHomeData } from "@/lib/home";
import Link from "next/link";
import React from "react";
import { MdRenderer } from "../_components/MdRenderer/MdRenderer";

export default async function Page() {
  const content = await getHomeData();

  return (
    <React.Fragment>
      <div className="my-20">
        <MdRenderer content={content} />
      </div>
    </React.Fragment>
  );
}
