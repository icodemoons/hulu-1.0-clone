import requests from "/utils/requests";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="relative bg-black">
      <div className="flex    bg-black px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24  hover:text-green-400/50 active:text-red-500 cursor-pointer transition duration-100 transform hover:scale-125"
            key={key}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute   top-0 right-0 bg-gradient-to-l from-[#202a25] h-10 w-1/12"></div>
    </nav>
  );
}
