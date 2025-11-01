"use client";
import React, { JSX, useState } from "react";

interface InsightCardProps {
  topic: string;
  title: JSX.Element;
  descriptions: JSX.Element;
  isActive: boolean;
  onClick: () => void;
}

const InsightCard: React.FC<InsightCardProps> = ({
  topic,
  title,
  descriptions,
  isActive,
  onClick,
}) => {
  const cardClasses = `relative p-8 rounded-[30px] transition-all duration-500 ease-in-out cursor-pointer 
    ${isActive ? "bg-[#95E999]" : "bg-[#FFF7EC]"} 
    shadow-lg`;

  const contentMaxHeight = isActive
    ? "max-h-96 opacity-100 mt-4"
    : "max-h-0 opacity-0 mt-0";

  return (
    <div className={cardClasses} onClick={onClick}>
      <div
        className={`transition-opacity duration-500 text-black ${
          isActive ? "hidden" : "block"
        }`}
      >
        <div className="text-3xl font-bold">{topic}</div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${contentMaxHeight}`}
      >
        <div className="rounded-[30px] p-4 -m-4">
          {title}
          <div className="mt-4">{descriptions}</div>
        </div>
      </div>
    </div>
  );
};

export default function Insights() {
  // ✅ ตั้ง default activeIndex = 0
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const insights = [
    {
      topic: "เราไม่ใช่แค่ จัดหาคน แต่เราสร้างทุนมนุษย์ (Human Capital)",
      title: (
        <div className="text-4xl font-bold text-black">
          เราไม่ใช่แค่ <span className="text-white">จัดหาคน</span>{" "}
          แต่เราสร้างทุนมนุษย์ (Human Capital)
        </div>
      ),
      descriptions: (
        <div className="text-2xl text-black">
          บริษัททั่วไป <span className="font-bold">หาคนมาให้คุณ</span> แล้วจบ
          แต่เราช่วยคุณวางระบบคนตั้งแต่วันแรก ตั้งแต่ Recruitment, Onboarding,
          Training, KPI, จนถึงการพัฒนาอย่างต่อเนื่อง
        </div>
      ),
    },
    {
      topic: "เราเป็น HR Co-Pilot สำหรับ SME และ Startup",
      title: (
        <div className="text-4xl font-bold text-black">
          เราเป็น <span className="text-white">HR Co-Pilot</span> สำหรับ SME และ
          Startup
        </div>
      ),
      descriptions: (
        <div className="text-2xl text-black">
          คุณโฟกัสธุรกิจได้เต็มที่ เพราะเราจะดูแลคนให้ทั้งหมด เราทำงานเหมือน HR
          ทีมในบริษัท ตั้งแต่การสรรหา วางระบบ Payroll, เอกสาร, Performance
          Management
        </div>
      ),
    },
    {
      topic:
        "บริการระดับพรีเมียมในราคาที่ SME เอื้อมถึง (Affordable Excellence)",
      title: (
        <div className="text-4xl font-bold text-black">
          บริการระดับพรีเมียมในราคาที่ <span className="text-white">SME</span>{" "}
          เอื้อมถึง (Affordable Excellence)
        </div>
      ),
      descriptions: (
        <div className="text-2xl text-black">
          แพ็กเกจเริ่มต้นเพียง 10,000 บาท/เดือน ครอบคลุมตั้งแต่การสรรหา
          การวางระบบ HR ไปจนถึงการจัดการ Outsourcing ไม่มีต้นทุนแฝง
          ไม่ผูกสัญญานาน และคิดค่าใช้จ่ายตามผลลัพธ์
        </div>
      ),
    },
  ];

  const handleClick = (index: number) => {
    // ✅ คลิกแล้วจะ active การ์ดนั้นเท่านั้น ไม่สามารถ uncheck ได้
    setActiveIndex(index);
  };

  return (
    <div
      className="relative flex flex-col h-screen bg-[#2D2D2D] px-10 py-16 justify-center items-center gap-4"
      id="insights"
    >
      <div className="text-6xl font-bold w-full text-white">
        เพราะเราไม่ใช่แค่จัดหาคน
        <br />
        แต่เราสร้าง <span className="text-[#95E999]">ทุนมนุษย์</span> ให้คุณ
      </div>
      <div className="text-[24px] text-gray-400 w-full mb-8">
        จาก “People” สู่ “Performance” เราคือพาร์ตเนอร์ HR
        ที่ช่วยให้ธุรกิจของคุณเติบโตได้อย่างยั่งยืน
        <br />
        ด้วยระบบการบริหารคนที่ครบวงจร เข้าใจ SME และคุ้มค่าที่สุดในตลาด
      </div>

      <div className="w-full max-w-6xl flex flex-col gap-6">
        {insights.map((insight, index) => (
          <InsightCard
            key={index}
            {...insight}
            isActive={activeIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
