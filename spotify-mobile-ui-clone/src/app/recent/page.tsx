"use client";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";
import Tag from "@/components/Tag";
import Player from "@/components/Player";
import Footer from "@/components/Footer";
import diana from "@/assets/images/diana.jpeg";
import criolo from "@/assets/images/criolo.jpeg";
import mj from "@/assets/images/mj.jpeg";
import RecentCard from "@/components/RecentCard";

export default function Recent() {
  return (
    <div className="overflow-hidden w-[412px] m-auto">
      <div className="fixed w-[412px] top-0 text-zinc-50 p-4 bg-zinc-900 flex">
        <Link href="/">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="font-bold ml-6">Tocadas recentemente</h1>
      </div>
      <div className="bg-zinc-900 text-zinc-50 m-auto p-4">
        <div className="flex mt-12 mb-6 w-[120vw]">
          <Tag context="notifications" label="Podcasts e programas" />
          <Tag context="notifications" label="Playlists" />
          <Tag context="notifications" label="Álbuns" />
          <Tag context="notifications" label="Músicas" />
        </div>
        <h2 className="font-bold text-md w-2/3">Hoje</h2>
        <section className="mt-4 gap-4 flex flex-col items-center">
          <RecentCard
            imgSrc={diana}
            title="Músicas curtidas"
            description="Playlist"
            intent="initial"
          />
          <RecentCard
            imgSrc={criolo}
            title="Criolo"
            description="Música"
            intent="custom"
          />
          <RecentCard
            imgSrc={mj}
            title="Michael Jackson"
            description="Álbum"
            intent="custom"
          />
          <RecentCard
            imgSrc={diana}
            title="Diana Martine"
            description="TransDev"
            intent="custom"
          />
        </section>
        <section className="mt-4 gap-4 flex flex-col items-center">
          <RecentCard
            imgSrc={criolo}
            title="Criolo"
            description="Música"
            intent="custom"
          />
          <RecentCard
            imgSrc={mj}
            title="Michael Jackson"
            description="Álbum"
            intent="custom"
          />
          <RecentCard
            imgSrc={diana}
            title="Diana Martine"
            description="TransDev"
            intent="custom"
          />
        </section>
        <section className="mt-4 gap-4 flex flex-col items-center">
          <RecentCard
            imgSrc={criolo}
            title="Criolo"
            description="Música"
            intent="custom"
          />
          <RecentCard
            imgSrc={mj}
            title="Michael Jackson"
            description="Álbum"
            intent="custom"
          />
          <RecentCard
            imgSrc={diana}
            title="Diana Martine"
            description="TransDev"
            intent="custom"
          />
        </section>
        <div className="fixed w-[380px] bottom-[76px]">
          <Player imgSrc={diana} title="Diana Martine" track="TransDev" />
        </div>
      </div>
      <div className="fixed w-[412px] bottom-0">
        <Footer />
      </div>
    </div>
  );
}
