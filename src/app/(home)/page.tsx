import { MdRenderer } from "@/components/MdRenderer/MdRenderer";
import { getHomeData } from "@/lib/home";
import Image from "next/image";

export default async function Page() {
  const content = await getHomeData();

  return (
    <section>
      <div className="my-20 relative">
        <Image
          width={150}
          height={150}
          objectFit="cover"
          className="md:absolute md:-right-44 rounded hover:rounded-full duration-200 cursor-pointer ease-in-out border border-gray-800  object-cover"
          alt=""
          src="/abhin.jpg"
        />
        <MdRenderer content={content} />
      </div>
    </section>
  );
}
