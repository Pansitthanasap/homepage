import Image from "next/image";
import handshake from "../../../public/handshake.png";
import contact_us_bg from "../../../public/contact-us-bg.png";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Homepage */}
      <div className="relative flex flex-col h-screen bg-[#073328]">
        <Image
          src={handshake}
          alt="Handshake"
          className="absolute left-0 bottom-0 w-full"
          draggable={false}
          loading="eager"
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
      {/* Problems */}
      <div className="relative flex flex-col h-screen bg-[#FFF7EC]"></div>
      {/* Who We Are */}
      <div className="relative flex flex-col h-screen bg-[#FFF7EC]"></div>
      {/* Packages */}
      <div className="relative flex flex-col h-screen bg-[#2D2D2D]"></div>
      {/* Insights */}
      <div className="relative flex flex-col h-screen bg-[#2D2D2D]"></div>
      {/* Contact Us*/}
      <div className="relative flex flex-col" id="contact">
        <Image
          src={contact_us_bg}
          alt="Contact Us Background"
          className="w-full"
          draggable={false}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-[#2D2D2D] via-[#324233]/50 to-[#4CAF50]/60" />
        <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center">
          <div className="bg-white w-5/6 h-10/12 rounded-[50px] flex justify-center items-center">
            <div className="text-[40px] text-black font-bold">ติดต่อเรา</div>
          </div>
        </div>
      </div>
    </div>
  );
}
