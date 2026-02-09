import Image from "next/image";
import Link from "next/link";
import handshake from "../../public/handshake.png";

export default function Slogan() {
  return (
    <div className="relative h-screen bg-[#073328] text-white" id="slogan">
      <Image
        src={handshake}
        alt="Handshake"
        className="absolute top-[40%] lg:top-0 bottom-0 w-full"
        draggable={false}
        loading="eager"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center content-center gap-4 text-center lg:gap-2">
        <div className="font-(family-name:--font-crimson-text) text-5xl lg:text-7xl">
          We Build Teams That Build Your Business
        </div>
        <div className="text-2xl lg:text-4xl">
          เราสร้างทีมให้คุณ เพื่อสร้างธุรกิจให้โต
        </div>
        <Link
          href="/join-us"
          className="flex lg:hidden justify-center items-center h-12 w-36 rounded-full bg-[#485C11] text-sm font-bold"
        >
          ร่วมงานกับเรา
        </Link>
      </div>
      <Link
        href="/join-us"
        className="absolute lg:flex justify-center items-center h-12 w-36 right-4 top-4 rounded-full bg-[#485C11] text-sm font-bold hidden"
      >
        ร่วมงานกับเรา↗
      </Link>
    </div>
  );
}
