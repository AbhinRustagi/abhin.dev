import { generateMetadata as generateDefaultMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import { MdRenderer } from "@/app/_components/MdRenderer/MdRenderer";
import { parse } from "marked";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(props: Props) {
  const slug = props.params.slug;
  const post = await getData(slug);

  return generateDefaultMetadata({ title: post.metadata?.title });
}

async function getData(slug: string) {
  const mdContent = await fetch(
    `https://raw.githubusercontent.com/AbhinRustagi/blog/main/${slug}.md`
  )
    .then((res) => res.text())
    .catch(() => {
      notFound();
    });

  const parsedMdContent = matter(mdContent);

  return {
    ok: true,
    content: await parse(parsedMdContent.content),
    metadata: parsedMdContent.data,
  };
}

export default async function Page({ params }: Props) {
  const data = await getData(params.slug);

  return (
    <>
      <h1 className="mb-4 text-2xl">{data.metadata?.title}</h1>
      <MdRenderer content={data.content} />
    </>
  );
}

export async function generateStaticParams() {
  const { tree } = await fetch(
    "https://api.github.com/repos/AbhinRustagi/blog/git/trees/main?recursive=1"
  ).then((res) => res.json());

  return tree.map((post: any) => ({ slug: post?.path.replace(".md", "") }));
}
