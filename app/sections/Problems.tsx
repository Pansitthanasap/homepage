import Image, { StaticImageData } from "next/image";
import helpWanted from "../../public/help-wanted.jpeg";
import noHR from "../../public/no-hr.jpeg";
import unclearManagement from "../../public/unclear-management.jpeg";
import highTurnover from "../../public/high-turnover.jpeg";

export interface Problem {
  title: string;
  image: StaticImageData;
  description: React.ReactNode;
}

export default function Problems() {
  const problems: Problem[] = [
    {
      title: "ขาดแคลนบุคลากรคุณภาพ",
      image: helpWanted,
      description: "คำอธิบายปัญหา 1",
    },
    {
      title: "ไม่มีฝ่าย HR ประจำ",
      image: noHR,
      description: "คำอธิบายปัญหา 2",
    },
    {
      title: "ขาดระบบบริหารคนที่ชัดเจน",
      image: unclearManagement,
      description: "คำอธิบายปัญหา 3",
    },
    {
      title: "หาคนยาก / คนลาออกบ่อย",
      image: highTurnover,
      description: "คำอธิบายปัญหา 4",
    },
  ];
  return (
    <div className="relative flex flex-col h-full lg:h-screen px-10 lg:px-16 py-10 lg:py-14 gap-4 bg-[#FFF7EC]">
      <div className="text-black text-4xl lg:text-6xl font-bold">
        เจ้าของ <span className="text-[#95E999]">SME / Startup</span> <br />
        กำลังเจอปัญหาเหล่านี้อยู่หรือเปล่า?
      </div>
      <div className="text-gray-500 lg:text-2xl text-xl">
        เมื่อธุรกิจเริ่มโตขึ้น… แต่ <span className="font-bold">คน</span>{" "}
        ยังไม่พร้อม <br />
        นี่คือ 4 ปัญหาหลักที่เราพบในทุกบริษัทก่อนเริ่มใช้บริการของเรา
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {problems.map((problem, index) => (
          <div key={index} className="flex flex-col gap-2">
            <Image
              src={problem.image}
              alt={problem.title}
              className="rounded-3xl w-full h-auto object-cover"
              loading="eager"
            />
            <div className="w-full text-lg md:text-xl font-bold text-center text-black">
              {problem.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
