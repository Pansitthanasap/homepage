"use client";

import Image from "next/image";
import JoinUsBackground from "@/public/join-us-bg.png";
import { useActionState } from "react";
import { login } from "@/app/actions/auth";

export default function AdminLoginPage() {
  const [, action, pending] = useActionState(login, undefined);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
      {/* Background image */}
      <Image
        src={JoinUsBackground}
        alt="Background"
        fill
        priority
        className="object-cover object-center -z-10 blur-sm"
      />
      <form className="relative flex flex-col h-auto w-full max-w-md bg-white rounded-[10px] p-6 px-10 py-10 gap-10 items-center justify-center" action={action}>
        {/* Title */}
        <div className="text-black text-[36px] font-bold leading-[85%] tracking-[-0.025em] text-center align-middle">
          เข้าสู่ระบบ
        </div>

        <div className="flex flex-col gap-6 w-full">
          {/* Input Fields */}
          <div className="flex flex-col gap-4 w-full">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="text-black w-full h-[50px] px-4 border border-gray-300 rounded-[10px] text-[18px] focus:outline-none focus:ring-2 focus:ring-[#95E999]"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="text-black w-full h-[50px] px-4 border border-gray-300 rounded-[10px] text-[18px] focus:outline-none focus:ring-2 focus:ring-[#95E999]"
            />
          </div>
        </div>

        {/* Login Button */}
        <button type="submit" disabled={pending} className="w-[332px] h-[66px] bg-[#95E999] rounded-[10px] cursor-pointer hover:bg-[#73cc72] transition-colors text-center text-white text-[32px] font-normal">
          เข้าสู่ระบบ
        </button>
      </form>
    </div>
  );
};
