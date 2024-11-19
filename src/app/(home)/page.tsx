import Projects from "@/components/Cards/Projects";
import { getAllPosts } from "@/lib/blog";
import YTMusic from "@/components/Cards/YTMusic";
import Image from "next/image";
import {
  About,
  Blog,
  InProgress,
  NowWidget,
} from "./components/Cards";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div>
      <InProgress />
      <div className="flex md:flex-row flex-col gap-6 flex-wrap">
        <div className="flex gap-6 flex-col flex-1 h-full">
          <About />
          <Blog posts={posts.reverse().slice(0, 4)} />
        </div>
        <div className="flex gap-6 flex-col flex-1 h-full">
          <NowWidget />
          <Projects />
        </div>
      </div>
    </div>
  );
}
