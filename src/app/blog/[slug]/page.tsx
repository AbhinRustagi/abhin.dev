import MdRenderer from "@/components/MdRenderer/MdRenderer";
import { Heading } from "@/components/Text";
import { getAllPosts, getPostBySlug, IPost } from "@/lib/blog";

type Props = {
  params: { slug: string };
};

export default async function BlogPost({ params }: Props) {
  const data = await getPostBySlug(decodeURIComponent(params.slug));

  return (
    <section className="py-20 md:py-24">
      <Heading.H1 className="mb-8">{data.metadata?.title}</Heading.H1>
      <div className="text-gray-300">
        <MdRenderer content={data.content} />
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const posts = (await getAllPosts()) as IPost[];
  return posts.map((post) => ({
    slug: post.metadata.slug,
  }));
}
