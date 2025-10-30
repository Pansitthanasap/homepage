"use client";

import Image from "next/image";
import exit_icon from "../../../../public/exit-icon.png";
import { useState } from "react";

const ResumeUploadPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Instead of submitting immediately, open modal
    setOpenModal(true);
  };

  const handleAccept = () => {
    setOpenModal(false);
    alert("ส่งใบสมัครเรียบร้อย ✅");
  };
  const handleClose = () => {
    window.location.href = "/profile-upload";
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F5F2]">
      {/* Header */}
      <div className="flex items-center py-[20px] md:py-[30px] h-[80px] md:h-[90px] shadow-[0px_4px_20px_0px_#00000040]">
        <div className="px-[20px] md:px-[38px]">
          <Image
            src={exit_icon}
            alt="Exit Icon"
            className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] cursor-pointer"
            draggable={false}
            onClick={handleClose}
          />
        </div>
        <div className="font-medium text-[24px] md:text-[32px] leading-[140%] tracking-[-2.5%] text-center align-middle">
          กรอกใบสมัคร
        </div>
      </div>

      {/* Subtitle */}
      <div className="flex flex-col justify-center items-center font-[300] text-center px-6 pb-[20px] pt-[30px] md:pb-[30px] md:pt-[40px] text-[18px] md:text-[24px] leading-[85%] tracking-[-2.5%] opacity-80">
        เริ่มต้นกรอกข้อมูล บอกเราเกี่ยวกับตัวคุณ เพื่อประหยัดเวลาของคุณ
        กรุณากรอกข้อมูลที่เป็นความจริงและครบถ้วน
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid justify-center items-center px-4 md:px-0"
      >
        <div className="pb-[10px] font-[400] text-[18px] md:text-[24px] leading-[85%] tracking-[-2.5%] text-[#D43737]">
          *required
        </div>

        <div className="grid gap-6 p-[24px] md:p-[50px] w-full md:w-[1114px] max-w-[1114px] h-auto shadow-[0px_4px_20px_0px_#00000040] rounded-[20px] bg-white">
          {/* Email */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full gap-2 md:gap-0">
            <label
              htmlFor="email"
              className="font-[300] text-[24px] md:text-[32px] leading-[85%] tracking-[-2.5%]"
            >
              ระบุอีเมล
            </label>
            <input
              type="email"
              id="email"
              className="border border-black text-gray-900 text-[18px] md:text-[20px] font-[300] rounded-[10px] w-full md:w-[509px] h-[50px] md:h-[60px] p-2.5"
              placeholder="Example@email.com"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full gap-2 md:gap-0">
            <label
              htmlFor="phone"
              className="font-[300] text-[24px] md:text-[32px] leading-[85%] tracking-[-2.5%]"
            >
              ระบุเบอร์โทร
            </label>
            <input
              type="tel"
              id="phone"
              className="border border-black text-gray-900 text-[18px] md:text-[20px] font-[300] rounded-[10px] w-full md:w-[509px] h-[50px] md:h-[60px] p-2.5"
              placeholder="080-123-4567"
              required
            />
          </div>

          {/* Full Name */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full gap-2 md:gap-0">
            <div className="font-[300] text-[24px] md:text-[32px] leading-[85%] tracking-[-2.5%]">
              ชื่อ-นามสกุล
            </div>
            <div className="flex justify-between gap-2 w-full md:w-[509px]">
              <input
                type="text"
                id="first-name"
                className="border border-black text-gray-900 text-[18px] md:text-[20px] font-[300] rounded-[10px] p-2.5 h-[50px] md:h-[60px] w-[calc(50%-4px)]"
                placeholder="ชื่อ"
                required
              />
              <input
                type="text"
                id="last-name"
                className="border border-black text-gray-900 text-[18px] md:text-[20px] font-[300] rounded-[10px] p-2.5 h-[50px] md:h-[60px] w-[calc(50%-4px)]"
                placeholder="นามสกุล"
                required
              />
            </div>
          </div>
          {/* Position */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full gap-2 md:gap-0">
            <label
              htmlFor="position"
              className="font-[300] text-[24px] md:text-[32px] leading-[85%] tracking-[-2.5%]"
            >
              ระบุตำแหน่งที่สนใจ
            </label>
            <input
              type="text"
              id="position"
              className="border border-black text-gray-900 text-[18px] md:text-[20px] font-[300] rounded-[10px] w-full md:w-[509px] h-[50px] md:h-[60px] p-2.5"
              placeholder="ตำแหน่ง"
              required
            />
          </div>

          {/* PDF Upload */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full gap-2 md:gap-0">
            <label
              htmlFor="resume"
              className="font-[300] text-[24px] md:text-[32px] leading-[85%] tracking-[-2.5%]"
            >
              แนบไฟล์เรซูเม่ (PDF)
            </label>
            <input
              type="file"
              id="resume"
              accept="application/pdf"
              required
              className="flex items-center border border-black text-gray-900 text-[18px] md:text-[20px] font-[300] rounded-[10px] 
              w-full md:w-[509px] h-[50px] md:h-[60px] p-0 overflow-hidden
              file:h-full file:px-4 file:py-0 file:rounded-[10px] file:border-0 file:text-[16px] file:font-medium 
              file:bg-[#E5E7EB] file:text-black hover:file:bg-[#D1D5DB] cursor-pointer"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center md:justify-end w-full mt-6">
            <button
              type="submit"
              className="bg-[#171717] hover:bg-[#333333] text-white font-medium text-[18px] md:text-[20px] px-[30px] md:px-[40px] py-[10px] rounded-[10px] shadow-md transition-all duration-200"
            >
              ส่งใบสมัคร
            </button>
          </div>
        </div>
      </form>

      {/* Modal */}
      {openModal && (
        <div
          className="fixed h-[927px] inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm"
          onClick={() => setOpenModal(false)}
        >
          <div
            className="bg-white rounded-[20px] shadow-lg w-[90%] max-w-[600px] p-6"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          >
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-xl font-semibold text-gray-900">นโยบาย</h3>
              <button
                onClick={() => setOpenModal(false)}
                className="text-gray-400 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="mt-4 text-gray-600 space-y-3">
              <p>
                โปรดตรวจสอบข้อมูลของคุณก่อนส่งใบสมัคร
                เพื่อให้มั่นใจว่าข้อมูลถูกต้อง และเป็นความจริงทั้งหมด
              </p>
              <p>เมื่อคุณกดยืนยัน ระบบจะดำเนินการส่งใบสมัครของคุณทันที</p>
            </div>
            <div className="flex justify-end gap-3 mt-6 border-t pt-4">
              <button
                onClick={handleAccept}
                className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-5 py-2 rounded-lg"
              >
                I accept
              </button>
              <button
                onClick={() => setOpenModal(false)}
                className="border border-gray-300 text-gray-700 hover:bg-gray-100 px-5 py-2 rounded-lg"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeUploadPage;
