import Image from "next/image";
import handshake from "../../../public/handshake.png";
import Link from "next/link";
import Problems from "./components/Problems";
import WhoWeAre from "./components/WhoWeAre";
import Packages from "./components/Packages";
import Insights from "./components/Insights";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

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
          <div className="font-[Crimson_Text] text-7xl text-white text-center">
            We Build Teams That Build Your Business
          </div>
          <div className="text-4xl text-white text-center">
            เราสร้างทีมให้คุณ เพื่อสร้างธุรกิจให้โต
          </div>
        </div>
        <Link href="/profile-upload" className="absolute h-12 w-36 right-5 top-8 rounded-full bg-[#485C11] flex justify-center items-center">ร่วมงานกับเรา↗</Link>
      </div>
      {/* Problems */}
      <Problems />
      {/* Who We Are */}
      <WhoWeAre />
      {/* Packages */}
      <Packages />
      {/* Insights */}
      <Insights />
      {/* Testimonials */}
      <Testimonials />
      {/* About Us */}
      <AboutUs />
      {/* Contact Us*/}
      <ContactUs />
    </div>
  );
}
