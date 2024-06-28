import { generateMetadata } from "@/lib/metadata";
import matter from "gray-matter";
import Link from "next/link";

export const metadata = generateMetadata({ title: "Blog" });

export async function getData() {
  const { tree } = await fetch(
    "https://api.github.com/repos/AbhinRustagi/blog/git/trees/main?recursive=1"
  ).then((res) => res.json());

  const posts = tree.map(async (node: any) => {
    const mdContent = fetch(
      `https://raw.githubusercontent.com/AbhinRustagi/blog/main/${node.path}`
    ).then((res) => res.text());
    const parsedMdContent = matter(await mdContent);

    return {
      slug: node.path.replace(".md", ""),
      title: parsedMdContent.data?.title,
      readingTime: parsedMdContent.data?.readingTime,
      publishDate: (parsedMdContent.data?.publishDate as Date).toDateString(),
    };
  });

  return Promise.all(posts);
}

function groupPostsByDate(posts: any[]) {
  const groupedList: { date: string; posts: any[] }[] = [];
  const dateIndexMap: { [k in string]: number } = {};

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

  console.log(groupedList);

  return groupedList;
}

export default async function Page() {
  const posts = await getData();
  const organizedPosts = groupPostsByDate(posts.reverse());

  return (
    <>
      <ul>
        {organizedPosts.map((groupedPosts) => {
          return (
            <>
              <div className="font-sans mb-2 text-neutral-500 uppercase text-sm">
                {groupedPosts.date}
              </div>
              {groupedPosts.posts.map((item) => (
                <li key={item.slug} className="mb-6">
                  <div>
                    <Link className="underline" href={`/blog/${item.slug}`}>
                      {item.title}
                    </Link>
                  </div>
                </li>
              ))}
            </>
          );
        })}
      </ul>
    </>
  );
}
