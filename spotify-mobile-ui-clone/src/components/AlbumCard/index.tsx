import Image, { StaticImageData } from "next/image";

export type AlbumCardProps = {
  imgSrc: StaticImageData;
  description: string;
};

export default function AlbumCard({ imgSrc, description }: AlbumCardProps) {
  return (
    <div className="w-fit flex flex-col gap-2">
      <Image
        src={imgSrc}
        alt="Capa do álbum"
        width={146}
        height={146}
        priority
      />
      <strong className="text-[10px] font-bold text-zinc-400">
        {description}
      </strong>
    </div>
  );
}
