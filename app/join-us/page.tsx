import Image from "next/image";
import Link from "next/link";
import JoinUsBackground from "../../public/join-us-bg.png";
import portfolio from "../../public/portfolio.svg";
import LogoBlack from "../../public/logo-black.png";

export default function JoinUs() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Background image */}
      <Image
        src={JoinUsBackground}
        alt="Background"
        className="blur-sm w-full"
        loading="eager"
      />
      <div className="absolute left-0 top-0 flex flex-col w-full h-full justify-center items-center gap-10">
        {/* Title Section */}
        <div className="bg-white/50">
          <div className="font-light text-black md:text-[40px] lg:text-[64px] text-center align-middle opacity-100 px-8 py-4">
            ร่วมงานกับเรา
          </div>
        </div>

        {/* Upload Box */}
        <div className="flex flex-col h-auto w-full max-w-md bg-white rounded-[10px] p-6 px-20 py-10 gap-20 items-center justify-center">
          <Image src={portfolio} alt="portfolio" className="w-[92px] h-auto" />
          <div className="flex flex-col gap-10">
            <div className="text-black text-[36px] font-bold leading-[85%] tracking-[-0.025em] text-center align-middle">
              กรอกข้อมูลผู้สมัคร
            </div>
            <div className="text-black text-[20px] font-normal leading-[100%] tracking-normal text-center align-middle">
              กรอกประวัติ อัพโหลด Resume บอกเล่าเรื่องราวเกี่ยวกับตัวคุณ
            </div>
          </div>
          <Link
            href="/upload-resume"
            className="w-[332px] h-[66px] bg-[#95E999] rounded-[5px] cursor-pointer hover:bg-[#73cc72] transition-colors text-center text-white text-[32px] flex justify-center items-center"
          >
            ไปกรอกข้อมูล
          </Link>
        </div>
      </div>
      <Link
        href="/"
        className="absolute top-4 left-4 w-[46px] cursor-pointer"
      >
        <Image src={LogoBlack} alt="Background" />
      </Link>
    </div>
  );
}
