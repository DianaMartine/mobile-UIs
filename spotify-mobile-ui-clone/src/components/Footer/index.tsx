import { House, MagnifyingGlass, Playlist } from "@phosphor-icons/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
    flex 
    justify-between 
    pr-8
    pl-8
    pt-4
    pb-2
    text-[8px] 
    bg-gradient-to-t 
    from-black 
    to-black/10 
    m-auto
    text-zinc-200"
    >
      <Link href="/" className="flex flex-col items-center">
        <House size={32} weight="fill" />
        <span>Início</span>
      </Link>
      <Link href="/search" className="flex flex-col items-center">
        <MagnifyingGlass size={32} />
        <span>Buscar</span>
      </Link>
      <Link href="/playlists" className="flex flex-col items-center">
        <Playlist size={32} />
        <span>Sua Biblioteca</span>
      </Link>
    </footer>
  );
}
