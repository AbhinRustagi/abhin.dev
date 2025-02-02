import { getAllPosts } from "@/lib/blog";
import Headshot from "@/public/headshott-min copy.jpg";
import Image from "next/image";
import { About, Blog } from "./components/Cards";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div>
      <div className="flex md:flex-row flex-col gap-6 flex-wrap">
        <div className="flex gap-6 flex-col flex-[2/3] h-full">
          <About />
          <Blog posts={posts.reverse().slice(0, 4)} />
        </div>
        <div className="flex gap-6 flex-col flex-[1/3] h-full">
          <div className="flex-1 aspect-square rounded-xl relative overflow-hidden">
            <Image src={Headshot} alt="" fill className="object-cover" />
          </div>
          {/* <div className="flex gap-6">
            <div className="flex-1 aspect-square rounded-xl">
              <WakaTimeWidget />
            </div>
            <LocationCard />
            <YTMusic />
          </div>
          <NowWidget />
          <Projects /> */}
        </div>
      </div>
    </div>
  );
}
