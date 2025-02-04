import Socials from "@/components/Socials";
import { getAllPosts } from "@/lib/blog";
import { About, Avatar, Blog } from "./components/Cards";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <>
      <Avatar />
      <About />
      <Socials />
      <Blog posts={posts.reverse().slice(0, 4)} />
    </>
  );
}
