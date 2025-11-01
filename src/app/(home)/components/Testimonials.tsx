"use client";
import { useState, useEffect } from "react";
import apostrophe from "../../../../public/apostrophe.svg";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "เราทำงานในฐานะ HR Co-Pilot ให้ SME/Startup ตั้งแต่สรรหา วางระบบ จนถึงประเมินผล เพื่อให้ธุรกิจโฟกัสการเติบโตได้เต็มที่",
      customer: "บริษัท สตาร์ทอัพ จำกัด",
    },
    {
      quote:
        "บริการ HR Outsource ของเรา ช่วยให้ธุรกิจ SME สามารถจัดการทรัพยากรบุคคลได้อย่างมีประสิทธิภาพ โดยไม่ต้องเพิ่มภาระค่าใช้จ่าย",
      customer: "บริษัท เอสเอ็มอี โซลูชั่น จำกัด",
    },
    {
      quote:
        "ทีมงานมืออาชีพที่เข้าใจความต้องการของธุรกิจขนาดเล็กและกลาง ให้คำปรึกษาและบริการที่ตอบโจทย์",
      customer: "บริษัท นวัตกรรม จำกัด",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // 🎯 ปรับค่า Interval จาก 100ms เป็น 10000ms (10 วินาที)
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [testimonials.length]); // ใส่ testimonials.length เป็น dependency เพื่อความสมบูรณ์

  return (
    <div
      className="relative flex flex-col h-screen bg-[#2D2D2D] px-10 py-16 justify-center items-center gap-4"
      id="testimonials"
    >
      <div className="text-6xl text-white font-bold w-full">
        ลูกค้าจริงที่ไว้วางใจเรา
      </div>
      <div className="text-4xl text-gray-400 w-full">
        “เราทำงานในฐานะ HR Co-Pilot ให้ SME/Startup
        <br />
        ตั้งแต่สรรหา วางระบบ จนถึงประเมินผล
        เพื่อให้ธุรกิจโฟกัสการเติบโตได้เต็มที่”
      </div>
      <div className="h-11/12 w-11/12 flex items-center justify-center">
        <div className="relative w-full max-w-4xl h-64 flex overflow-hidden">
          {testimonials.map((t, index) => (
            <div
              key={index}
              // 🎯 ปรับ duration ของ transition เป็น duration-500 (0.5 วินาที) เพื่อให้เปลี่ยนได้ไวขึ้น
              className={`absolute transition-opacity duration-500 ease-in-out text-center px-4 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="text-4xl text-white">
                <Image src={apostrophe} alt="“" className=" w-8 h-8 mr-2" />
                {t.quote}
              </div>
              <div className="mt-6 text-2xl text-[#95E999] font-semibold">
                - {t.customer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
