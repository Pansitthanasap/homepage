"use client";
import Image from "next/image";
import profile_upload_bg from "../../../public/profile-upload-bg.png";
import logo_black from "../../../public/logo-black-no-bg.png";
import portfolio from "../../../public/portfolio.png";

const ProfileUploadPage = () => {
  const navigateToHome = () => {
    window.location.href = "/";
  };
  const handleUploadClick = () => {
    window.location.href = "/profile-upload/upload";
  };
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
      {/* Background image */}
      <Image
        src={profile_upload_bg}
        alt="Background"
        fill
        priority
        className="object-cover object-center -z-10 blur-sm"
      />
      <div
        className="md:fixed md:top-4 md:left-4 w-[46px] mb-4 h-auto cursor-pointer"
        onClick={navigateToHome}
      >
        <Image src={logo_black} alt="Background" />
      </div>
      <div className="flex flex-col gap-10 relative">
        {/* Title Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-white opacity-50"></div>
          <div className="relative font-[300] text-[40px] md:text-[64px] leading-[85%] tracking-[-0.025em] text-center align-middle opacity-100 px-8 py-4">
            ร่วมงานกับเรา
          </div>
        </div>

        {/* Upload Box */}
        <div className="relative flex flex-col h-auto w-full max-w-md bg-white rounded-[10px] p-6 px-20 py-10 gap-20 items-center justify-center">
          <Image src={portfolio} alt="portfolio" className="w-[92px] h-auto" />
          <div className="flex flex-col gap-10">
            <div className="text-[36px] font-bold leading-[85%] tracking-[-0.025em] text-center align-middle">
              กรอกข้อมูลผู้สมัคร
            </div>
            <div className="text-[20px] font-normal leading-[100%] tracking-normal text-center align-middle">
              กรอกประวัติ อัพโหลด Resume บอกเล่าเรื่องราวเกี่ยวกับตัวคุณ
            </div>
          </div>
          <button
            className="w-[332px] h-[66px] bg-[#95E999] rounded-[5px] cursor-pointer hover:bg-[#73cc72] transition-colors text-center text-white text-[32px] font-[400]"
            onClick={handleUploadClick}
          >
            ไปกรอกข้อมูล
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileUploadPage;
