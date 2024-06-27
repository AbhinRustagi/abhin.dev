import { generateMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = generateMetadata({ title: "Blog" });

export default function Page() {
  return (
    <>
      <h2 className="text-2xl font-extrabold mb-4">Blog</h2>
      <ul>
        {/* {blogItems.map((item) => (
          <li key={item.slug} className="mb-6">
            <div>
              <Link className="underline text-blue-600" href={`/blog/${item.slug}`}>{item.title}</Link>
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
