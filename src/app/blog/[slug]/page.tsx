import { generateMetadata as generateDefaultMetadata } from "@/lib/metadata";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(props: Props) {
  const slug = props.params.slug;

  return generateDefaultMetadata();
}

export default function Page() {
  return <></>;
}

export async function generateStaticParams() {
  // const posts = await fetch("https://.../posts").then((res) => res.json());

  return [];
}
