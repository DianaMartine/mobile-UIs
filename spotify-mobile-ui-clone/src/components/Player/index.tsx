import Image, { StaticImageData } from "next/image";
import { Devices, Heart, Play } from "@phosphor-icons/react";

export type PlayerProps = {
  imgSrc: StaticImageData;
  title: string;
  track: string;
};

export default function Player({ imgSrc, title, track }: PlayerProps) {
  return (
    <div className="flex flex-col bg-zinc-700 rounded-md">
      <div className="flex justify-between p-2 items-center w-full">
        <div className="flex items-center gap-3">
          <Image src={imgSrc} alt={title} width={48} height={48} />
          <div className="flex flex-col text-xs">
            <strong>{title}</strong>
            <span>{track}</span>
          </div>
        </div>
        <div className="flex gap-3 pr-3">
          <Devices size={24} />
          <Heart size={24} color="#22c55e" weight="fill" />
          <Play size={24} weight="fill" />
        </div>
      </div>
      <div
        className="w-[98%] h-[1px] rounded-lg m-auto bg-gradient-to-r to-white/20 via-white/80 from-white/80"
      />
    </div>
  );
}
