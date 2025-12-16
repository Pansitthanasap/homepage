import Image from "next/image";
import Link from "next/link";
import handshake from "../../public/handshake.png";

export default function Slogan() {
  return <div className="relative h-screen bg-[#073328] text-white" id="slogan">
    <Image
      src={handshake}
      alt="Handshake"
      className="absolute bottom-0 w-full"
      draggable={false}
      loading="eager"
    />
    <div className="absolute inset-0 flex flex-col justify-center content-center gap-2 text-center">
      <div className="font-(family-name:--font-crimson-text) text-7xl">
        We Build Teams That Build Your Business
      </div>
      <div className="text-4xl">
        เราสร้างทีมให้คุณ เพื่อสร้างธุรกิจให้โต
      </div>
    </div>
    <Link
      href="/join-us"
      className="absolute flex justify-center items-center h-12 w-36 right-4 top-4 rounded-full bg-[#485C11] text-sm font-bold"
    >
      ร่วมงานกับเรา↗
    </Link>
  </div>;
}
