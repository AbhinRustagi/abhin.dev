import MdRenderer from "@/components/MdRenderer/MdRenderer";
import { Heading } from "@/components/Text";
import { getAllPosts, getPostBySlug, IPost } from "@/lib/blog";
import Link from "next/link";
import { SlArrowLeft } from "react-icons/sl";

type Props = {
  params: { slug: string };
};

export default async function BlogPost({ params }: Props) {
  const data = await getPostBySlug(decodeURIComponent(params.slug));

  return (
    <section className="pt-10 md:pt-12 max-w-2xl mx-auto">
      <div className="block mb-8">
        <Link href="/blog" className="flex items-center gap-2 text-sm underline">
          <SlArrowLeft className="h-3 w-3" /> all posts
        </Link>
      </div>
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
