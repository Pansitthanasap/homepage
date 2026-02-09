"use client";

import Image from "next/image";
import exitIcon from "@/public/exit.png";
import { useState, useRef } from "react";
import { submitResume } from "@/app/actions/upload-resume";
import { type PutBlobResult } from "@vercel/blob";
import { upload } from "@vercel/blob/client";
import { useRouter } from "next/navigation";

export default function ResumeUploadPage() {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(true);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = () => {
    if (file) {
      setUploading(true);
      upload(file.name, file, {
        access: "public",
        handleUploadUrl: "/api/upload-resume",
      })
        .then((result: PutBlobResult) => {
          (submitButtonRef.current?.form?.[6] as HTMLInputElement).value =
            file?.name ?? "";
          (submitButtonRef.current?.form?.[7] as HTMLInputElement).value =
            result.url;
          submitButtonRef.current?.click();
          setUploading(false);
          alert("ส่งใบสมัครเรียบร้อย ✅");
          router.push("/");
        })
        .catch((error: Error) => {
          console.error("Upload failed:", error);
          alert("การส่งใบสมัครล้มเหลว ❌ กรุณาลองใหม่อีกครั้ง");
        });
    }
  };

  const handleAccept = () => {
    setOpenModal(false);
  };

  const handleClose = () => {
    history.back();
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F5F2]">
      {/* Header */}
      <div className="flex items-center py-5 md:py-7.5 h-20 md:h-22.5 shadow-[0px_4px_20px_0px_#00000040]">
        <div className="px-5 md:px-9.5">
          <Image
            src={exitIcon}
            alt="Exit Icon"
            className="w-6.25 h-6.25 md:w-7.5 md:h-7.5 cursor-pointer"
            draggable={false}
            onClick={handleClose}
          />
        </div>
        <div className="font-medium text-black text-[24px] md:text-[32px] leading-[140%] tracking-[-2.5%] text-center align-middle">
          กรอกใบสมัคร
        </div>
      </div>

      {/* Subtitle */}
      <div className="flex flex-col justify-center items-center text-black font-light text-center px-6 pt-7.5 md:pb-7.5 md:pt-10 text-[18px] md:text-[24px] leading-[85%] tracking-[-2.5%] opacity-80">
        เริ่มต้นกรอกข้อมูล บอกเราเกี่ยวกับตัวคุณ เพื่อประหยัดเวลาของคุณ
        กรุณากรอกข้อมูลที่เป็นความจริงและครบถ้วน
      </div>

      {/* Form */}
      <form
        action={submitResume}
        className="grid justify-center items-center px-4 md:px-0 py-10 lg:py-0"
      >
        <div className="pb-2.5 font-normal text-[18px] md:text-[24px] leading-[85%] tracking-[-2.5%] text-[#D43737]">
          *required
        </div>

        <div className="grid gap-6 p-6 md:p-12.5 w-full md:w-278.5 max-w-278.5 h-auto shadow-[0px_4px_20px_0px_#00000040] rounded-[20px] bg-white">
          {/* Email */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full gap-2 md:gap-0">
            <label
              htmlFor="email"
              className="font-light text-black text-[24px] md:text-[32px] leading-[85%] tracking-[-2.5%]"
            >
              ระบุอีเมล
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="on"
              className="border border-black text-gray-900 text-[18px] md:text-[20px] font-light rounded-[10px] w-full md:w-127.25 h-12.5 md:h-15 p-2.5"
              placeholder="Example@email.com"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full gap-2 md:gap-0">
            <label
              htmlFor="phone"
              className="font-light text-black text-[24px] md:text-[32px] leading-[85%] tracking-[-2.5%]"
            >
              ระบุเบอร์โทร
            </label>
            <input
              type="tel"
              pattern="[0-9]{10}"
              autoComplete="on"
              id="phone"
              name="phone"
              className="border border-black text-gray-900 text-[18px] md:text-[20px] font-light rounded-[10px] w-full md:w-127.25 h-12.5 md:h-15 p-2.5"
              placeholder="0801234567"
              required
            />
          </div>

          {/* Full Name */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full gap-2 md:gap-0">
            <div className="font-light text-black text-[24px] md:text-[32px] leading-[85%] tracking-[-2.5%]">
              ชื่อ-นามสกุล
            </div>
            <div className="flex justify-between gap-2 w-full md:w-127.25">
              <input
                type="text"
                id="first_name"
                name="first_name"
                autoComplete="on"
                className="border border-black text-gray-900 text-[18px] md:text-[20px] font-light rounded-[10px] p-2.5 h-12.5 md:h-15 w-[calc(50%-4px)]"
                placeholder="ชื่อ"
                required
              />
              <input
                type="text"
                id="last_name"
                name="last_name"
                autoComplete="on"
                className="border border-black text-gray-900 text-[18px] md:text-[20px] font-light rounded-[10px] p-2.5 h-12.5 md:h-15 w-[calc(50%-4px)]"
                placeholder="นามสกุล"
                required
              />
            </div>
          </div>
          {/* Position */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full gap-2 md:gap-0">
            <label
              htmlFor="position"
              className="font-light text-black text-[24px] md:text-[32px] leading-[85%] tracking-[-2.5%]"
            >
              ระบุตำแหน่งที่สนใจ
            </label>
            <input
              type="text"
              id="position"
              name="position"
              className="border border-black text-gray-900 text-[18px] md:text-[20px] font-light rounded-[10px] w-full md:w-127.25 h-12.5 md:h-15 p-2.5"
              placeholder="ตำแหน่ง"
              required
            />
          </div>

          {/* PDF Upload */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full gap-2 md:gap-0">
            <label
              htmlFor="resume"
              className="font-light text-black text-[24px] md:text-[32px] leading-[85%] tracking-[-2.5%]"
            >
              แนบไฟล์เรซูเม่ (PDF)
            </label>
            <input
              type="file"
              id="resume"
              accept="application/pdf"
              required
              onChange={(e) => {
                const selectedFile = e.target.files ? e.target.files[0] : null;
                setFile(selectedFile);
              }}
              className="flex items-center border border-black text-gray-900 text-[18px] md:text-[20px] font-light rounded-[10px] 
              w-full md:w-127.25 h-12.5 md:h-15 p-0 overflow-hidden
              file:h-full file:px-4 file:py-0 file:rounded-[10px] file:border-0 file:text-[16px] file:font-medium 
              file:bg-[#E5E7EB] file:text-black hover:file:bg-[#D1D5DB] cursor-pointer"
            />
          </div>

          <input type="hidden" name="resume_file_name" value={""} />
          <input type="hidden" name="resume_url" value={""} />

          {/* Submit Button */}
          <div className="flex justify-center md:justify-end w-full mt-6">
            <button
              type="button"
              className="bg-[#171717] hover:bg-[#333333] text-white font-medium text-[18px] md:text-[20px] px-7.5 md:px-10 py-2.5 rounded-[10px] shadow-md transition-all duration-200"
              onClick={handleSubmit}
              disabled={uploading}
            >
              ส่งใบสมัคร
            </button>
            <button
              type="submit"
              className="hidden"
              id="hidden-submit"
              ref={submitButtonRef}
            >
              Hidden Submit
            </button>
          </div>
        </div>
      </form>

      {/* Modal */}
      {openModal && (
        <div
          className="fixed h-screen inset-0 flex justify-center items-center bg-black/40 backdrop-blur-sm"
          onClick={() => setOpenModal(false)}
        >
          <div
            className="bg-white rounded-[20px] shadow-lg w-[90%] max-w-150 p-6"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          >
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-xl font-semibold text-gray-900">นโยบาย</h3>
              <button
                type="button"
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
                type="button"
                onClick={handleAccept}
                className="bg-[#4CAF50] hover:bg-[#0A462D] text-white font-medium px-5 py-2 rounded-lg"
              >
                I accept
              </button>
              <button
                type="button"
                onClick={() => history.back()}
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
}
