import Image from "next/image";
import contact_us_bg from "../../public/contact-us-bg.png";
import { submitContactForm } from "@/app/actions/contact-us";

export default function ContactUs() {
  return (
    <div className="relative h-[200vh]" id="contact-us">
      <Image
        src={contact_us_bg}
        alt="Contact Us Background"
        className="w-full object-cover h-full"
        draggable={false}
      />
      <div className="absolute inset-0 bg-linear-to-b from-[#2D2D2D] via-[#324233]/50 to-[#4CAF50]/60" />
      <div className="absolute inset-0 flex justify-center items-center h-3/4">
        <form
          className="flex justify-center items-center w-5/6 text-black"
          action={submitContactForm}
        >
          <div className="bg-white w-full rounded-4xl shadow-lg p-8 flex flex-col gap-6">
            <div className="text-5xl font-bold text-center">ติดต่อเรา</div>
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold">ข้อมูลการติดต่อ</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="ชื่อ"
                  required
                  className="border border-gray-300 rounded-2xl px-4 h-[70px] focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="นามสกุล"
                  required
                  className="border border-gray-300 rounded-2xl px-4 h-[70px] focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="tel"
                  name="phone"
                  pattern="[0-9]{10}"
                  autoComplete="on"
                  placeholder="หมายเลขโทรศัพท์มือถือ"
                  required
                  className="border border-gray-300 rounded-2xl px-4 h-[70px] focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="อีเมล"
                  required
                  className="border border-gray-300 rounded-2xl px-4 h-[70px] focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-3xl font-bold">
                เรื่องที่ต้องการติดต่อ
              </label>

              <input
                list="contact-topics"
                name="topic"
                placeholder="เลือกหรือพิมพ์หัวข้อ"
                required
                className="border border-gray-300 rounded-2xl px-4 py-2 h-[70px] w-full focus:outline-none focus:ring-2 focus:ring-green-400"
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
                className="border border-gray-300 rounded-2xl px-4 py-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-green-500 text-white font-semibold text-[32px] px-8 py-2 rounded-3xl hover:bg-green-600 transition cursor-pointer"
              >
                ส่งข้อความ
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
