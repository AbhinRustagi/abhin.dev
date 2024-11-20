import { getAllPosts } from "@/lib/blog";
import RSS from "rss";

async function buildFeed() {
  const feed = new RSS({
    title: "Abhin Rustagi – Software Engineer",
    description:
      "Software Engineer, Full Stack Developer, and Coffee enthusiast. I build things.",
    site_url: "https://abhin.dev",
    feed_url: `https://abhin.dev/feed.xml`,
    copyright: `${new Date().getFullYear()} Abhin Rustagi`,
    language: "en",
    pubDate: new Date(),
  });

  const posts = await getAllPosts();
  posts.map((post) => {
    feed.item({
      title: post.metadata.title,
      guid: `https://www.abhin.dev/${post.metadata.slug}`,
      url: `https://www.abhin.dev/${post.metadata.slug}`,
      date: post.metadata.date,
      description: post.metadata.description,
      author: "Abhin Rustagi",
      categories: post.metadata.tags || [],
    });
  });

  return feed;
}

export async function GET() {
  const feed = (await buildFeed()) as RSS;

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
