import { getAllPosts } from "@/lib/blog";
import { About, Blog, NowWidget } from "./components/Cards";
import Projects from "@/components/Cards/Projects";
import YTMusic from "@/components/Cards/YTMusic";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div>
      <div className="flex md:flex-row flex-col gap-6 flex-wrap">
        <div className="flex gap-6 flex-col flex-1 h-full">
          <About />
          <div className="flex gap-6">
            <Blog posts={posts.reverse().slice(0, 4)} />
          </div>
        </div>
        <div className="flex gap-6 flex-col flex-1 h-full">
          <NowWidget />
          {/* <WakaTimeWidget /> */}
          {/* <PhotosWidget /> */}
          {/* Photo */}
          <YTMusic />
          <Projects />
        </div>
      </div>
    </div>
  );
}
