import Image from "next/image";
import handshake from "../../public/handshake.png";
import contact_us_bg from "../../public/contact-us-bg.png";
import "./globals.css";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Homepage */}
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
      {/* Contact Us*/}
      <div className="relative flex flex-col">
        {/* Background image */}
        <div className="flex justify-center items-center">
          <div className="absolute top-[45px] bg-white text-black px-4 py-2 rounded-[50px] w-[1024px] h-auto ">
            <div className="font-bold text-[40px] leading-[140%] tracking-[0%] text-center">
              ติดต่อเรา
            </div>
          </div>
        </div>
        <Image
          src={contact_us_bg}
          alt="contact us bg"
          className="w-auto h-screen object-cover"
          draggable={false}
        />
      </div>
    </div>
  );
}
