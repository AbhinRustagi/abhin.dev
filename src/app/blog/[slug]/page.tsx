import { generateMetadata as generateDefaultMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(props: Props) {
  const slug = props.params.slug;

  return generateDefaultMetadata();
}

export default function Page() {
  // Fetch data else notFound()
  // notFound();

  return (
    <>
      <h1 className="mb-4"></h1>
      <div dangerouslySetInnerHTML={{ __html: "" }} />
    </>
  );
}

export async function generateStaticParams() {
  const { tree } = await fetch(
    "https://api.github.com/repos/AbhinRustagi/blog/git/trees/main?recursive=1"
  ).then((res) => res.json());

  return tree.map((post: any) => ({ slug: post?.path }));
}
