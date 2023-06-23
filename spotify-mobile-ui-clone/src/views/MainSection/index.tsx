import Card from "@/components/Card";
import Tag from "@/components/Tag";
import image from "@/assets/images/diana.jpeg";
import criolo from "@/assets/images/criolo.jpeg";
import liana from "@/assets/images/liana.jpeg";
import mj from "@/assets/images/mj.jpeg";
import AlbumCard from "@/components/AlbumCard";
import Player from "@/components/Player";

export default function MainSection() {
  return (
    <main className="p-4 m-auto overflow-y-auto">
      <div className="flex mb-6">
        <Tag label="Músicas" context="home" />
        <Tag label="Podcasts e programas" context="home" />
      </div>
      <div className="flex flex-wrap gap-2">
        <Card imgSrc={image} title="Músicas Curtidas" intent="initial" />
        <Card imgSrc={criolo} title="Nó na orelha" intent="custom" />
        <Card imgSrc={liana} title="Recently" intent="custom" />
        <Card imgSrc={image} title="Playlist 1" intent="custom" />
        <Card imgSrc={mj} title="Mix de Michael Jackson" intent="custom" />
        <Card imgSrc={image} title="Playlist 2" intent="custom" />
      </div>
      <section className="mt-6">
        <h2 className="font-extrabold text-lg w-2/3">
          Com base no que você ouviu recentemente
        </h2>

        <div className="mt-6 flex gap-3 w-[100vw]">
          <AlbumCard imgSrc={image} description="Diana Martine, TransDev" />
          <AlbumCard imgSrc={criolo} description="Criolo" />
          <AlbumCard imgSrc={mj} description="Michael Jackson" />
        </div>
        <h2 className="font-extrabold text-lg w-2/3 mt-6">
          Seus mixes mais ouvidos
        </h2>

        <div className="mt-6 flex gap-3 w-[100vw]">
          <AlbumCard imgSrc={image} description="Diana Martine, TransDev" />
          <AlbumCard imgSrc={criolo} description="Criolo" />
          <AlbumCard imgSrc={mj} description="Michael Jackson" />
        </div>
      </section>
      <div className="fixed w-[92vw] bottom-[76px]">
        <Player imgSrc={image} title="Diana Martine" track="TransDev" />
      </div>
    </main>
  );
}
