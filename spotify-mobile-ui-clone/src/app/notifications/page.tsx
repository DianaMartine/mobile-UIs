"use client";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";
import Tag from "@/components/Tag";
import NotificationCard from "@/components/NotificationCard";
import Player from "@/components/Player";
import Footer from "@/components/Footer";
import diana from "@/assets/images/diana.jpeg";
import criolo from "@/assets/images/criolo.jpeg";
import mj from "@/assets/images/mj.jpeg";

export default function Notifications() {
  return (
    <div className="overflow-hidden">
      <div className="fixed w-full top-0 text-zinc-50 p-4 bg-zinc-900 flex">
        <Link href="/">
          <ArrowLeft size={24} />
        </Link>
      </div>
      <div className="bg-zinc-900 text-zinc-50 m-auto p-4">
        <div className="mt-16">
          <h1 className="font-extrabold text-2xl">Novidades</h1>
          <p className="mt-2 text-xs text-zinc-400">
            Os lançamentos mais recentes, escolhidos a dedo para você.
          </p>
        </div>
        <div className="flex mt-8 mb-6">
          <Tag context="notifications" label="Músicas" />
          <Tag context="notifications" label="Podcasts e programas" />
        </div>
        <h2 className="font-bold text-md w-2/3">Novos</h2>
        <section className="mt-4 gap-4 flex flex-col">
          <NotificationCard
            imgSrc={diana}
            type="Developer"
            time="Front-end"
            date="Hoje"
            title="TransDev"
            author="Diana Martine"
          />
          <NotificationCard
            imgSrc={criolo}
            type="Álbum"
            time="Nó na Orelha"
            date="2011"
            title="Não Existe Amor em SP"
            author="Criolo"
          />
          <NotificationCard
            imgSrc={mj}
            type="Mix"
            time="Michael Jackson"
            date="2010"
            title="Mix de Michael Jackson"
            author="Michael Jackson"
          />
        </section>
        <div className="fixed w-[92vw] bottom-[76px]">
          <Player imgSrc={diana} title="Diana Martine" track="TransDev" />
        </div>
      </div>
      <div className="fixed w-full bottom-0">
        <Footer />
      </div>
    </div>
  );
}
