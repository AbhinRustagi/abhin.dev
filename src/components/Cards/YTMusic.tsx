import Image from "next/image";
import { SiYoutubemusic } from "react-icons/si";

export default function YTMusic() {
  return (
    <div className="p-4 rounded-xl bg-ytm border border-neutral-900 flex justify-between">
      <div className="flex gap-4 flex-1">
        <div className="aspect-square relative rounded overflow-hidden">
          <Image
            fill
            src="https://i.scdn.co/image/ab67616d0000b27373c6514b296e0b53dc7b75b3"
            alt=""
            className="aspect-square object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="text-white">Khudi</div>
          <div className="text-sm text-neutral-400">The Local Train</div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <SiYoutubemusic className="w-7 h-7 text-red-300" />
      </div>
    </div>
  );
}
