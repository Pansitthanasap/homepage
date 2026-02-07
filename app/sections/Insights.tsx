"use client";
import { useState } from "react";

export interface InsightCardProps {
  topic: string;
  title: React.ReactNode;
  descriptions: React.ReactNode;
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
  return (
    <div
      className={`relative p-8 rounded-[30px] transition-all duration-500 ease-in-out cursor-pointer 
    ${isActive ? "bg-[#95E999]" : "bg-[#FFF7EC]"} 
    shadow-lg`}
      onClick={onClick}
    >
      <div
        className={`transition-opacity duration-500 text-black ${
          isActive ? "hidden" : "block"
        }`}
      >
        <div className="text-xl lg:text-3xl font-bold">{topic}</div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isActive ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
        }`}
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
  const insights = [
    {
      topic: "เราไม่ใช่แค่ จัดหาคน แต่เราสร้างทุนมนุษย์ (Human Capital)",
      title: (
        <div className="text-2xl lg:text-4xl font-bold text-black">
          เราไม่ใช่แค่ <span className="text-white">จัดหาคน</span>{" "}
          แต่เราสร้างทุนมนุษย์ (Human Capital)
        </div>
      ),
      descriptions: (
        <div className="text-lg lg:text-2xl text-black">
          บริษัททั่วไป <span className="font-bold">หาคนมาให้คุณ</span> แล้วจบ
          แต่เราช่วยคุณวางระบบคนตั้งแต่วันแรก ตั้งแต่ Recruitment, Onboarding,
          Training, KPI, จนถึงการพัฒนาอย่างต่อเนื่อง
        </div>
      ),
    },
    {
      topic: "เราเป็น HR Co-Pilot สำหรับ SME และ Startup",
      title: (
        <div className="text-2xl lg:text-4xl font-bold text-black">
          เราเป็น <span className="text-white">HR Co-Pilot</span> สำหรับ SME และ
          Startup
        </div>
      ),
      descriptions: (
        <div className="text-lg lg:text-2xl text-black">
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
        <div className="text-2xl lg:text-4xl font-bold text-black">
          บริการระดับพรีเมียมในราคาที่ <span className="text-white">SME</span>{" "}
          เอื้อมถึง (Affordable Excellence)
        </div>
      ),
      descriptions: (
        <div className="text-lg lg:text-2xl text-black">
          แพ็กเกจเริ่มต้นเพียง 10,000 บาท/เดือน ครอบคลุมตั้งแต่การสรรหา
          การวางระบบ HR ไปจนถึงการจัดการ Outsourcing ไม่มีต้นทุนแฝง
          ไม่ผูกสัญญานาน และคิดค่าใช้จ่ายตามผลลัพธ์
        </div>
      ),
    },
  ];
  const [activeIndex, setActiveIndex] = useState<keyof typeof insights>(0);

  const handleClick = (index: keyof typeof insights) => {
    setActiveIndex(index);
  };

  return (
    <div
      className="flex flex-col h-full lg:h-screen px-10 py-10 lg:py-16 justify-center items-center gap-4 bg-[#2D2D2D]"
      id="insights"
    >
      <div className="text-4xl lg:text-6xl font-bold w-full text-white">
        เพราะเราไม่ใช่แค่จัดหาคน <br />
        แต่เราสร้าง <span className="text-[#95E999]">ทุนมนุษย์</span> ให้คุณ
      </div>
      <div className="text-lg lg:text-2xl text-gray-400 w-full">
        จาก “People” สู่ “Performance” เราคือพาร์ตเนอร์ HR
        ที่ช่วยให้ธุรกิจของคุณเติบโตได้อย่างยั่งยืน <br />
        ด้วยระบบการบริหารคนที่ครบวงจร เข้าใจ SME และคุ้มค่าที่สุดในตลาด
      </div>
      <div className="flex flex-col w-full gap-6">
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
