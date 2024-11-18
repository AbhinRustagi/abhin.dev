import Projects from "@/components/Cards/Projects";
import generateMetadata from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Work",
  canonical: "/work",
});

export default function Work() {
  return <Projects />;
}
