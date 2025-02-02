import Image from "next/image";
import { Heading } from "../Text";

export function PhotosWidget() {
  return (
    <div className="flex-1 rounded-xl border border-border aspect-square relative overflow-hidden">
      <div className="relative h-full w-full opacity-0 hover:opacity-100 z-0 bg-white p-6 transition-all flex justify-end items-end">
        <Heading.H2 className="text-background mb-2 text-right">
          Photo of the Day
        </Heading.H2>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1728901863101-9d82fe7f4276?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        fill
        alt=""
        className="relative h-full w-full -z-10"
      />
    </div>
  );
}
