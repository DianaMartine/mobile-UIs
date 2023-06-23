import Image, { StaticImageData } from "next/image";
import { Heart } from "@phosphor-icons/react";

export type CardProps = {
  imgSrc: StaticImageData;
  title: string;
  intent?: "initial" | "custom";
};

export default function Card({ imgSrc, title, intent }: CardProps) {
  return (
    <div className="flex items-center gap-2 bg-white/10 w-[186px] text-[10px] rounded-md">
      {intent === "initial" ? (
        <>
          <div className="w-[56px] h-[56px] flex items-center justify-center bg-gradient-to-br from-blue-800 via-violet-500 to-white">
            <Heart size={20} weight="fill" />
          </div>
          <strong className="pr-4">Músicas Curtidas</strong>
        </>
      ) : (
        <>
          <Image src={imgSrc} alt="Capa do álbum" width={56} height={56} />
          <strong className="pr-4">{title}</strong>
        </>
      )}
    </div>
  );
}
