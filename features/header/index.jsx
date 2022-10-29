import { useState } from "react";
import Image from "next/image";
import HeaderItem from "../../features/header-item";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

export default function Header() {
  const [isShown, setIsShown] = useState({});
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto bg-black">
      <div className="flex flex-grow max-w-2xl justify-evenly">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      {isShown && (
        <Image
          className="object-contain"
          alt="image"
          width="100%"
          height="100%"
          src="/hulu-white.png"
        />
      )}
    </header>
  );
}
