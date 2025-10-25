import Image from "next/image";
import handshake from "../../public/handshake.png";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="relative flex flex-col h-screen bg-[#073328]">
          <Image
            src={handshake}
            alt="Handshake"
            className="w-full"
            draggable={false}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full gap-6 flex flex-col">
            <div className="font-[Crimson_Text] text-[80px] text-white text-center">
              We Build Teams That Build Your Business
            </div>
            <div className="text-[32px] leading-[85%] text-white text-center">
              เราสร้างทีมให้คุณ เพื่อสร้างธุรกิจให้โต
            </div>
          </div>
      </div>
    </div>
  );
}
