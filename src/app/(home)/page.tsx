import { getHomeData } from "@/lib/home";
import Link from "next/link";
import React from "react";
import { MdRenderer } from "../_components/MdRenderer/MdRenderer";

export default async function Page() {
  const content = await getHomeData();

  return (
    <React.Fragment>
      <MdRenderer content={content} />
    </React.Fragment>
  );
}
