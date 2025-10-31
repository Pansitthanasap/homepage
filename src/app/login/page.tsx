"use client";
import Image from "next/image";
import profile_upload_bg from "../../../public/profile-upload-bg.png";

const ProfileUploadPage = () => {
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
      <div className="relative flex flex-col h-auto w-full max-w-md bg-white rounded-[10px] p-6 px-10 py-10 gap-10 items-center justify-center">
        {/* Title */}
        <div className="text-[36px] font-bold leading-[85%] tracking-[-0.025em] text-center align-middle">
          เข้าสู่ระบบ
        </div>

        <div className="flex flex-col gap-6 w-full">
          {/* Input Fields */}
          <div className="flex flex-col gap-4 w-full">
            <input
              type="text"
              placeholder="Username"
              className="w-full h-[50px] px-4 border border-gray-300 rounded-[10px] text-[18px] focus:outline-none focus:ring-2 focus:ring-[#95E999]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full h-[50px] px-4 border border-gray-300 rounded-[10px] text-[18px] focus:outline-none focus:ring-2 focus:ring-[#95E999]"
            />
          </div>
        </div>

        {/* Login Button */}
        <button className="w-[332px] h-[66px] bg-[#95E999] rounded-[10px] cursor-pointer hover:bg-[#73cc72] transition-colors text-center text-white text-[32px] font-[400]">
          เข้าสู่ระบบ
        </button>
      </div>
    </div>
  );
};

export default ProfileUploadPage;
