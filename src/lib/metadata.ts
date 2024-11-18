import { Metadata } from "next";

interface PageMetadataProps {
  title: string;
  description?: string;
  canonical: string;
  keywords?: [string];
  twitter?: {
    site?: string;
    creator?: string;
    card?: string;
    image?: string;
  };
  openGraph?: {
    type?: string;
    image?: string;
    site_name?: string;
    locale?: string;
  };
}

export default function generateMetadata(props?: PageMetadataProps): Metadata {
  const title = props?.title
    ? props.title + " – Abhin Rustagi"
    : "Abhin Rustagi – Software Engineer";
  const description =
    props?.description ||
    "Software Engineer, Full Stack Developer, and Coffee enthusiast. I build things.";
  const canonical = props?.canonical
    ? "https://www.abhin.dev" + props.canonical
    : "https://www.abhin.dev";
  const keywords = props?.keywords || [
    "Software Engineer",
    "React",
    "Node",
    "Next.js",
    "TailwindCSS",
    "TypeScript",
    "Coffee",
    "University of Melbourne",
  ];
  const openGraph = {
    title,
    description,
    url: canonical,
    type: "website",
    image: "/og-image.png",
    site_name: "Abhin Rustagi",
    locale: "en_US",
    ...props?.openGraph,
  };
  const twitter = {
    title,
    description,
    site: "@abhinrustagi",
    creator: "@abhinrustagi",
    card: "summary_large_image",
    image: "/og-image.png",
    ...props?.twitter,
  };

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    keywords,
    openGraph,
    twitter,
  };
}
