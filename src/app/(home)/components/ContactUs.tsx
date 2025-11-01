import Image from "next/image";
import contact_us_bg from "../../../../public/contact-us-bg.png";
import { submitContactForm } from "./actions";

export default function ContactUs() {
  return (
    <div
      className="relative flex flex-col h-[calc(120vh*4/3)] overflow-hidden"
      id="contact"
    >
      {/* 🔹 พื้นหลังเต็มพื้นที่ (h-screen * 4/3) */}
      <div className="absolute inset-0">
        <Image
          src={contact_us_bg}
          alt="Contact Us Background"
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#2D2D2D] via-[#324233]/50 to-[#4CAF50]/60" />
      </div>

      {/* 🔹 กล่องฟอร์ม */}
      <form className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-5/6 h-full" action={submitContactForm}>
        <div className="bg-white w-full rounded-[40px] shadow-lg p-8 md:p-12 flex flex-col gap-6">
          <div className="text-[28px] md:text-[40px] font-bold text-center text-black">
            ติดต่อเรา
          </div>

          {/* ข้อมูลการติดต่อ */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[20px] md:text-[32px] font-bold text-black">
              ข้อมูลการติดต่อ
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="first_name"
                placeholder="ชื่อ"
                required
                className="text-black border border-gray-300 rounded-2xl px-4 w-full h-[70px] focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="text"
                name="last_name"
                placeholder="นามสกุล"
                required
                className="text-black border border-gray-300 rounded-2xl px-4 w-full h-[70px] focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="tel"
                name="phone"
                pattern="[0-9]{10}"
                autoComplete="on"
                placeholder="หมายเลขโทรศัพท์มือถือ"
                required
                className="text-black border border-gray-300 rounded-2xl px-4 w-full h-[70px] focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                name="email"
                placeholder="อีเมล"
                required
                className="text-black border border-gray-300 rounded-2xl px-4 w-full h-[70px] focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          {/* เรื่องที่ต้องการติดต่อ */}
          <div className="flex flex-col gap-3">
            <label className="text-[20px] md:text-[32px] font-bold text-black">
              เรื่องที่ต้องการติดต่อ
            </label>

            <input
              list="contact-topics"
              name="topic"
              placeholder="เลือกหรือพิมพ์หัวข้อ"
              required
              className="text-black border border-gray-300 rounded-2xl px-4 py-2 h-[70px] w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <datalist id="contact-topics">
              <option value="ข้อมูลนักลงทุน" />
              <option value="สมัครงาน" />
              <option value="แนะนำ/ติชม และบริการ" />
              <option value="สมัครใช้แพ็กเกจของเรา" />
            </datalist>

            <textarea
              rows={4}
              name="description"
              placeholder="คำอธิบาย"
              required
              className="text-black border border-gray-300 rounded-2xl px-4 py-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* ปุ่มส่ง */}
          <div className="flex justify-center mt-4">
            <button type="submit" className="bg-green-500 text-white font-semibold text-[32px] px-8 py-2 rounded-3xl hover:bg-green-600 transition cursor-pointer">
              ส่งข้อความ
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
