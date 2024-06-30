import { MdRenderer } from "@/app/_components/MdRenderer/MdRenderer";
import { getAllPosts, getPost } from "@/lib/blog";
import { generateMetadata as generateDefaultMetadata } from "@/lib/metadata";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(props: Props) {
  const slug = props.params.slug;
  const post = await getPost(slug);
  return generateDefaultMetadata({ title: post.metadata?.title });
}

export default async function Page({ params }: Props) {
  const data = await getPost(params.slug);

  return (
    <>
      <h1 className="mb-4 text-2xl">{data.metadata?.title}</h1>
      <div className="text-gray-300">
        <MdRenderer content={data.content} />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: any) => ({ slug: post.slug }));
}
