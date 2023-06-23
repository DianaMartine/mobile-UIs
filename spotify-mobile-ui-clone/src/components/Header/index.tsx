import { Bell, ClockCountdown, Gear } from "@phosphor-icons/react";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className="
    flex 
    items-center 
    justify-between 
    p-4
    m-auto"
    >
      <h1 className="font-extrabold text-lg">Boa tarde</h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link
              href="/notifications"
              className="after:content-[''] after:block after:h-1.5 after:w-1.5 after:rounded-full after:absolute after:top-[22px] after:right-28 after:bg-blue-500
              "
            >
              <Bell size={24} />
            </Link>
          </li>
          <li>
            <Link href="/recent">
              <ClockCountdown size={24} mirrored />
            </Link>
          </li>
          <li>
            <Link href="/settingsPage">
              <Gear size={24} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
