import { generateMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = generateMetadata({ title: "Blog" });

export default function Page() {
  return (
    <>
      <ul>
        {/* {blogItems.map((item) => (
          <li key={item.slug} className="mb-6">
            <div className="font-sans">
              <Link href={`/blog/${item.slug}`}>{item.title}</Link>
            </div>
            <div className="text-sm text-neutral-500">
              {item.date} • {item.readTime}
            </div>
          </li>
        ))} */}
      </ul>
    </>
  );
}
