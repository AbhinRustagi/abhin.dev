import Button from "@/components/Button";
import MdRenderer from "@/components/MdRenderer/MdRenderer";
import { getAllPosts, getPostBySlug, IPost } from "@/lib/blog";
import _generateMetadata from "@/lib/metadata";
import { Metadata } from "next";
import Link from "next/link";
import { SlArrowLeft } from "react-icons/sl";

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const data = await getPostBySlug(
    decodeURIComponent((await props.params).slug)
  );

  return _generateMetadata({
    title: data.metadata?.title,
    description: data.metadata?.description,
    canonical: `/blog/${data.metadata?.slug}`,
  });
};

export default async function BlogPost({ params }: Props) {
  const data = await getPostBySlug(decodeURIComponent((await params).slug));

  return (
    <section className="max-w-2xl mx-auto">
      <div className="mb-8">
        <Button text="all posts" href="/blog" direction="backward" />
      </div>
      <h1 className="mb-6 text-xl">{data.metadata?.title}</h1>
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
