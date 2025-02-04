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
    <section className="pt-10 md:pt-12 max-w-2xl mx-auto">
      <div className="block mb-8">
        <Link
          href="/blog"
          className="flex items-center gap-2 text-sm underline"
        >
          <SlArrowLeft className="h-3 w-3" /> all posts
        </Link>
      </div>
      <h1 className="mb-8">{data.metadata?.title}</h1>
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
