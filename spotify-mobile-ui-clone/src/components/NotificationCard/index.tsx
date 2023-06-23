import Image, { StaticImageData } from "next/image";
import {
  PlusCircle,
  ArrowCircleDown,
  DotsThreeVertical,
  PlayCircle,
} from "@phosphor-icons/react";

export type NotificationCardProps = {
  imgSrc: StaticImageData;
  type: string;
  time: string;
  date: string;
  title: string;
  author: string;
};

export default function NotificationCard({
  imgSrc,
  type,
  time,
  date,
  title,
  author,
}: NotificationCardProps) {
  return (
    <div className="bg-zinc-900 text-zinc-50 m-auto w-[412px]">
      <div className="flex items-center gap-4">
        <Image
          src={imgSrc}
          width={126}
          height={126}
          alt={`${title} : ${author}`}
          className="rounded-md"
          priority
        />
        <div className="flex flex-col">
          <span className="text-[10px] text-zinc-400">{date}</span>
          <span className="font-extrabold">{title}</span>
          <span className="text-xs text-zinc-400">{author}</span>
        </div>
      </div>
      <span className="text-xs text-zinc-400">
        {type} • {time}
      </span>

      <div className="flex items-center justify-between mt-4 w-11/12">
        <div className="flex gap-3">
          <PlusCircle size={32} />
          <ArrowCircleDown size={32} />
          <DotsThreeVertical size={32} />
        </div>
        <PlayCircle size={40} weight="fill" />
      </div>
      <hr className="mt-4 w-11/12 opacity-5" />
    </div>
  );
}
