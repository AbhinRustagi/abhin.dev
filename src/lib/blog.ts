import matter from "gray-matter";
import { parse } from "marked";
import { notFound } from "next/navigation";

export interface IPost {
  title: string;
  slug: string;
  publishDate: string;
  readingTime: string;
  tags: string[];
  content?: string;
}

export interface GroupedPosts {
  date: string;
  posts: IPost[];
}

export async function getAllPosts(): Promise<IPost[]> {
  const { tree } = await fetch(
    "https://api.github.com/repos/AbhinRustagi/blog/git/trees/main?recursive=1"
  ).then((res) => res.json());

  const posts = tree
    .filter((node: any) => {
      const filename = node.path as string;
      // Expect only Markdown Files
      return filename.endsWith(".md");
    })
    .map(async (node: any) => {
      const slug = node.path.replace(".md", "");

      const post = await getPost(slug);

      return {
        slug,
        title: post.metadata?.title,
        readingTime: post.metadata?.readingTime,
        publishDate: post.metadata?.publishDate,
        tags: post.metadata?.tags,
      };
    });

  return Promise.all(posts);
}

const sortPosts = (posts: any): IPost[] =>
  posts.sort((a: any, b: any) => {
    const date1 = new Date(a.publishDate);
    const date2 = new Date(b.publishDate);
    return date2.getTime() / 1000 - date1.getTime() / 1000;
  });

export function groupPostsByDate(posts: any[]): GroupedPosts[] {
  const groupedList: { date: string; posts: any[] }[] = [];
  const dateIndexMap: { [k in string]: number } = {};

  sortPosts(posts);

  posts.forEach((post) => {
    const postDate = new Date(post.publishDate);
    const strPublishDate = postDate.toLocaleDateString("default", {
      month: "long",
      year: "numeric",
    });

    if (dateIndexMap.hasOwnProperty(strPublishDate)) {
      const index = dateIndexMap[strPublishDate];
      const listItem = groupedList[index];
      listItem.posts.push(post);
      groupedList[index] = listItem;
    } else {
      dateIndexMap[strPublishDate] = groupedList.length;
      const listEntry = {
        date: strPublishDate,
        posts: [post],
      };
      groupedList.push(listEntry);
    }
  });

  return groupedList;
}

export async function getPost(slug: string) {
  const mdContent = await fetch(
    `https://raw.githubusercontent.com/AbhinRustagi/blog/main/${slug}.md`
  )
    .then((res) => res.text())
    .catch(() => {
      notFound();
    });

  const parsedMdContent = matter(mdContent);
  const content = parsedMdContent.content.replaceAll(
    "(/images/",
    "(https://raw.githubusercontent.com/AbhinRustagi/blog/main/images/"
  );

  return {
    content: await parse(content),
    slug,
    metadata: parsedMdContent.data,
  };
}
