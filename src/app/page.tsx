import Image from "next/image";
import handshake from "../../public/handshake.png";

export default function Home() {
  return (
    <div className="relative flex flex-row bg-[#073328] w-screen h-screen pt-[142px] items-center justify-center text-center">
      {/* Background image centered */}
      <Image
        src={handshake}
        alt="Handshake"
        className="w-full h-auto opacity-30"
      />
      {/* Text */}
      <h1 className="absolute z-10 font-[Crimson_Text] font-normal text-[80px] leading-[85%] tracking-[-0.05em] text-white text-center">
        We Build Teams That Build Your Business
      </h1>
    </div>
  );
}
