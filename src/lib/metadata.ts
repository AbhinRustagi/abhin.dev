import { Metadata } from "next";

const title = "Abhin Rustagi";
const description = "";
const url = "";

interface GenerateMetadataParameters {
  title?: string;
  description?: string;
  url?: string;
}

export function generateMetadata(
  params?: GenerateMetadataParameters
): Metadata {
  const resultTitle = params?.title
    ? `${params?.title} | Abhin Rustagi`
    : title;

  return {
    title: resultTitle,
    description: params?.description || description,
    applicationName: "Abhin Rustagi - Website",
    keywords: [
      "Abhin",
      "Rustagi",
      "React",
      "Django",
      "Javascript",
      "Python",
      "Typescript",
      "Melbourne",
      "Artificial Intelligence",
    ],
    referrer: "origin",
    twitter: {
      card: "summary",
      site: "@abhinrustagi",
      creator: "@abhinrustagi",
      title: resultTitle,
      description: params?.description || description,
    },

    openGraph: {
      title: resultTitle,
      type: "website",
      url: params?.url || url,
      siteName: "Abhin Rustagi",
      description: params?.description || description,
    },
  };
}
