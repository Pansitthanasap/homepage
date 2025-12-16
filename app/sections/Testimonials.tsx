"use client";
import { useState, useEffect } from "react";

export interface Testimonial {
  quote: string;
  customer: string;
}

export default function Testimonials() {
  const testimonials: Array<Testimonial> = [
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
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div
      className="flex flex-col h-screen px-10 py-16 gap-12 bg-[#2D2D2D]"
      id="testimonials"
    >
      <div className="flex flex-col gap-4">
        <div className="text-6xl text-white font-bold">
          ลูกค้าจริงที่ไว้วางใจเรา
        </div>
        <div className="text-4xl text-gray-400">
          “เราทำงานในฐานะ HR Co-Pilot ให้ SME/Startup <br />
          ตั้งแต่สรรหา วางระบบ จนถึงประเมินผล เพื่อให้ธุรกิจโฟกัสการเติบโตได้เต็มที่”
        </div>
      </div>
      <div className="flex items-center justify-center">
        {testimonials[currentIndex] && (
          <div className="text-center px-4 text-4xl">
            <div className="text-start">&ldquo;</div>
            <div className="text-white">
              {testimonials[currentIndex].quote}
            </div>
            <div className="text-end">&rdquo;</div>
            <div className="mt-6 text-2xl text-[#95E999] font-semibold">
              - {testimonials[currentIndex].customer}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
