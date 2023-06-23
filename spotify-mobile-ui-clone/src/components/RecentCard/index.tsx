import Image, { StaticImageData } from "next/image";
import { Heart, DotsThreeVertical } from "@phosphor-icons/react";

export type NotificationCardProps = {
  imgSrc: StaticImageData;
  title: string;
  description: string;
  intent?: "initial" | "custom";
};

export default function RecentCard({
  imgSrc,
  title,
  description,
  intent,
}: NotificationCardProps) {
  return (
    <div className="bg-zinc-900 text-zinc-50 m-auto w-full">
      <div className="flex items-center gap-4 justify-between">
        <div className="flex gap-4 items-center">
          {intent === "initial" ? (
            <div className="w-[56px] h-[56px] flex items-center justify-center bg-gradient-to-br from-blue-800 via-violet-500 to-white">
              <Heart size={20} weight="fill" />
            </div>
          ) : (
            <Image src={imgSrc} alt="album cover" width={56} height={56} priority/>
          )}
          <div className="flex flex-col">
            <span className="font-bold">{title}</span>
            <span className="text-zinc-400 text-xs">{description}</span>
          </div>
        </div>
        {intent === "initial" ? "" : <DotsThreeVertical size={24} />}
      </div>
    </div>
  );
}
