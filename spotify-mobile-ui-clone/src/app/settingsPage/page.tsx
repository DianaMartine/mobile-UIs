"use client";
import {
  ArrowLeft,
  SpotifyLogo,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import Image from "next/image";
import diana from "@/assets/images/diana.jpeg";
import Link from "next/link";

export default function SettingsPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 h-screen bg-zinc-900 text-zinc-50 text-center">
      <Link href="/">
        <ArrowLeft size={24} />
      </Link>
      <div className="flex">
        <h1 className="font-bold text-2xl">Spotify Mobile Clone - UI</h1>
        <sup>
          <SpotifyLogo size={24} weight="fill" color="#22c55e" />
        </sup>
      </div>
      <p className="text-sm">
        This is a clone of the Spotify mobile app UI, made with React, NextJS
        and TailwindCSS. This project is part of my portfolio, and it is not
        intended to be used as a real app.
      </p>
      <p>
        You can check the source code <a href="/">here.</a>
      </p>
      <div className="flex flex-col items-center">
        <div>
          <p>Created by{""}</p>
        </div>
        <strong>@dianamartine</strong>
        <Image
          src={diana}
          alt="Diana Martine"
          width={92}
          height={92}
          className="rounded-full mt-4"
        />
        <div className="flex mt-4 gap-2">
          <a href="https://github.com/dianamartine">
            <GithubLogo size={24} />
          </a>
          <a href="https://www.linkedin.com/in/dianamartine/">
            <LinkedinLogo size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
