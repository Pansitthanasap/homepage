"use client";
import { useState } from "react";

export interface WhatWeCanDo {
  title: string;
  description: string;
  result: string;
  content: React.ReactNode;
}

export default function WhoWeAre() {
  const whatWeCanDo: WhatWeCanDo[] = [
    {
      title: "Recruitment & Screening",
      description: "สรรหาและคัดกรองบุคลากรคุณภาพ ส่งรายชื่อภายใน 5-7 วัน",
      result: "ได้ คนที่ใช่ ตรงกับวัฒนธรรมองค์กร ลดเวลาในการหาคน",
      content: (
        <div className="flex flex-col gap-4 text-3xl">
          <p>สรรหาและคัดกรองบุคลากรคุณภาพ ส่งรายชื่อภายใน 5-7 วัน</p>
          <div className="flex flex-col gap-2">
            <p className="font-bold">ผลลัพธ์ที่ลูกค้าได้รับ</p>
            <p>ได้ คนที่ใช่ ตรงกับวัฒนธรรมองค์กร ลดเวลาในการหาคน</p>
          </div>
        </div>
      ),
    },
    {
      title: "HR Setup & System Design",
      description:
        "สร้างระบบ HR ตั้งแต่เริ่มต้น เช่น JD, KPI, Onboarding Process",
      result: "มีระบบบริหารคนที่เป็นมาตรฐาน พร้อมใช้งานจริง",
      content: (
        <div className="flex flex-col gap-4 text-3xl">
          <p>สร้างระบบ HR ตั้งแต่เริ่มต้น เช่น JD, KPI, Onboarding Process</p>
          <div className="flex flex-col gap-2">
            <p className="font-bold">ผลลัพธ์ที่ลูกค้าได้รับ</p>
            <p>มีระบบบริหารคนที่เป็นมาตรฐาน พร้อมใช้งานจริง</p>
          </div>
        </div>
      ),
    },
    {
      title: "Payroll & Document Management",
      description: "วางระบบประเมินผล / Career Path / Exit Interview",
      result: "ทีมงานมีเป้าหมายชัดเจน ผลงานองค์กรเพิ่มขึ้น",
      content: (
        <div className="flex flex-col gap-4 text-3xl">
          <p>วางระบบประเมินผล / Career Path / Exit Interview</p>
          <div className="flex flex-col gap-2">
            <p className="font-bold">ผลลัพธ์ที่ลูกค้าได้รับ</p>
            <p>ทีมงานมีเป้าหมายชัดเจน ผลงานองค์กรเพิ่มขึ้น</p>
          </div>
        </div>
      ),
    },
    {
      title: "Performance Evaluation & KPI",
      description: "ให้คำปรึกษาเชิงกลยุทธ์โดยตรงกับเจ้าของธุรกิจ (CEO)",
      result: "ได้คู่คิดที่เข้าใจธุรกิจจริง สร้างระบบคนให้เติบโตระยะยาว",
      content: (
        <div className="flex flex-col gap-4 text-3xl">
          <p>ให้คำปรึกษาเชิงกลยุทธ์โดยตรงกับเจ้าของธุรกิจ (CEO)</p>
          <div className="flex flex-col gap-2">
            <p className="font-bold">ผลลัพธ์ที่ลูกค้าได้รับ</p>
            <p>ได้คู่คิดที่เข้าใจธุรกิจจริง สร้างระบบคนให้เติบโตระยะยาว</p>
          </div>
        </div>
      ),
    },
    {
      title: "HR Business Partner (HRBP)",
      description: "สรรหาและคัดกรองบุคลากรคุณภาพ ส่งรายชื่อภายใน 5-7 วัน",
      result: "ได้ คนที่ใช่ ตรงกับวัฒนธรรมองค์กร ลดเวลาในการหาคน",
      content: (
        <div className="flex flex-col gap-4 text-3xl">
          <p>สรรหาและคัดกรองบุคลากรคุณภาพ ส่งรายชื่อภายใน 5-7 วัน</p>
          <div className="flex flex-col gap-2">
            <p className="font-bold">ผลลัพธ์ที่ลูกค้าได้รับ</p>
            <p>ได้ คนที่ใช่ ตรงกับวัฒนธรรมองค์กร ลดเวลาในการหาคน</p>
          </div>
        </div>
      ),
    },
  ];
  const [activeIndex, setActiveIndex] = useState<keyof typeof whatWeCanDo>(0);

  return (
    <div className="relative flex flex-col justify-center content-center lg:h-screen h-full px-13 lg:px-16 py-10 lg:py-14 gap-4 bg-[#FFF7EC]">
      <svg
        viewBox="0 0 1440 322"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 bottom-0 w-full"
      >
        <g clipPath="url(#clip0_14_106)">
          <g
            clipPath="url(#paint0_angular_14_106_clip_path)"
            data-figma-skip-parse="true"
          >
            <g transform="matrix(0 0.13475 -0.2085 0 1032.5 194.75)">
              <foreignObject
                x="-1860.85"
                y="-1860.85"
                width="3721.71"
                height="3721.71"
              >
                <div
                  style={{
                    background:
                      "conic-gradient(from 90deg,rgba(52, 94, 70, 0.3555) 0deg,rgba(37, 67, 50, 0.5) 48.1799deg,rgba(47, 82, 59, 0.8) 72.1932deg,rgba(93, 150, 101, 0.2) 186.412deg,rgba(72, 127, 93, 1) 284.205deg,rgba(69, 124, 92, 0.2) 308.158deg,rgba(52, 94, 70, 0.3555) 360deg)",
                    height: "100%",
                    width: "100%",
                    opacity: 1,
                  }}
                ></div>
              </foreignObject>
            </g>
          </g>
          <path
            opacity="0.5"
            d="M823 332.5L870.329 336.532C875.574 274.956 889.137 233.351 911.543 202.71C933.677 172.441 968.279 147.652 1025.85 127.168L1009.92 82.417L993.998 37.6656C924.916 62.2462 871.701 96.2514 834.858 146.635C798.287 196.646 781.713 257.551 775.671 328.468L823 332.5ZM1199.39 112.571L1167.72 147.973C1196.59 173.805 1207.73 197.966 1210.4 223.625C1213.33 251.722 1206.66 286.711 1189.36 334.264L1234 350.5L1278.64 366.736C1297.55 314.753 1310.07 263.43 1304.89 213.773C1299.46 161.678 1275.18 116.642 1231.05 77.1682L1199.39 112.571ZM1009.92 82.417L1025.85 127.168C1077.44 108.81 1132.61 116.569 1167.72 147.973L1199.39 112.571L1231.05 77.1682C1164.57 17.6977 1070.82 10.3315 993.998 37.6656L1009.92 82.417Z"
            data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.14509804546833038,&#34;g&#34;:0.26274511218070984,&#34;b&#34;:0.19607843458652496,&#34;a&#34;:0.50},&#34;position&#34;:0.13383314013481140},{&#34;color&#34;:{&#34;r&#34;:0.18553225696086884,&#34;g&#34;:0.32214403152465820,&#34;b&#34;:0.23293440043926239,&#34;a&#34;:0.80000001192092896},&#34;position&#34;:0.20053668320178986},{&#34;color&#34;:{&#34;r&#34;:0.36666667461395264,&#34;g&#34;:0.58823531866073608,&#34;b&#34;:0.39803922176361084,&#34;a&#34;:0.20000000298023224},&#34;position&#34;:0.51781088113784790},{&#34;color&#34;:{&#34;r&#34;:0.28450471162796021,&#34;g&#34;:0.50104302167892456,&#34;b&#34;:0.36618050932884216,&#34;a&#34;:1.0},&#34;position&#34;:0.78945952653884888},{&#34;color&#34;:{&#34;r&#34;:0.27058824896812439,&#34;g&#34;:0.48627451062202454,&#34;b&#34;:0.36078432202339172,&#34;a&#34;:0.20000000298023224},&#34;position&#34;:0.85599559545516968}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.14509804546833038,&#34;g&#34;:0.26274511218070984,&#34;b&#34;:0.19607843458652496,&#34;a&#34;:0.50},&#34;position&#34;:0.13383314013481140},{&#34;color&#34;:{&#34;r&#34;:0.18553225696086884,&#34;g&#34;:0.32214403152465820,&#34;b&#34;:0.23293440043926239,&#34;a&#34;:0.80000001192092896},&#34;position&#34;:0.20053668320178986},{&#34;color&#34;:{&#34;r&#34;:0.36666667461395264,&#34;g&#34;:0.58823531866073608,&#34;b&#34;:0.39803922176361084,&#34;a&#34;:0.20000000298023224},&#34;position&#34;:0.51781088113784790},{&#34;color&#34;:{&#34;r&#34;:0.28450471162796021,&#34;g&#34;:0.50104302167892456,&#34;b&#34;:0.36618050932884216,&#34;a&#34;:1.0},&#34;position&#34;:0.78945952653884888},{&#34;color&#34;:{&#34;r&#34;:0.27058824896812439,&#34;g&#34;:0.48627451062202454,&#34;b&#34;:0.36078432202339172,&#34;a&#34;:0.20000000298023224},&#34;position&#34;:0.85599559545516968}],&#34;transform&#34;:{&#34;m00&#34;:2.5533889510143820e-14,&#34;m01&#34;:-417.00012207031250,&#34;m02&#34;:1241.0001220703125,&#34;m10&#34;:269.49993896484375,&#34;m11&#34;:1.6502114412908671e-14,&#34;m12&#34;:60.0},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"
          />
          <path
            opacity="0.5"
            d="M275 327H448C255.37 205.332 156.528 132.327 0 0V124C109.212 213.124 171.856 259.057 275 327Z"
            fill="url(#paint1_linear_14_106)"
          />
        </g>
        <defs>
          <clipPath id="paint0_angular_14_106_clip_path">
            <path
              opacity="0.5"
              d="M823 332.5L870.329 336.532C875.574 274.956 889.137 233.351 911.543 202.71C933.677 172.441 968.279 147.652 1025.85 127.168L1009.92 82.417L993.998 37.6656C924.916 62.2462 871.701 96.2514 834.858 146.635C798.287 196.646 781.713 257.551 775.671 328.468L823 332.5ZM1199.39 112.571L1167.72 147.973C1196.59 173.805 1207.73 197.966 1210.4 223.625C1213.33 251.722 1206.66 286.711 1189.36 334.264L1234 350.5L1278.64 366.736C1297.55 314.753 1310.07 263.43 1304.89 213.773C1299.46 161.678 1275.18 116.642 1231.05 77.1682L1199.39 112.571ZM1009.92 82.417L1025.85 127.168C1077.44 108.81 1132.61 116.569 1167.72 147.973L1199.39 112.571L1231.05 77.1682C1164.57 17.6977 1070.82 10.3315 993.998 37.6656L1009.92 82.417Z"
            />
          </clipPath>
          <linearGradient
            id="paint1_linear_14_106"
            x1="0.500002"
            y1="56.5"
            x2="347"
            y2="326"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#95E999" stopOpacity="0.5" />
            <stop offset="0.865385" />
          </linearGradient>
          <clipPath id="clip0_14_106">
            <rect width="1440" height="322" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div className="text-black lg:text-6xl text-4xl font-bold text-end">
        เราคือทีม <span className="text-[#95E999]">HR Co-Pilot</span> <br />
        ที่เข้าใจ SME และ Startup อย่างแท้จริง
      </div>
      <div className="text-gray-500 lg:text-2xl text-xl text-end">
        “คุณโฟกัสที่การเติบโตของธุรกิจ ส่วนเราดูแลเรื่อง{" "}
        <span className="font-bold">คน</span> ให้ทั้งหมด”
        เราไม่ได้แค่จัดหาพนักงาน แต่เราช่วยวางระบบ HR ที่ยั่งยืนตั้งแต่วันแรก
      </div>
      <div className="flex flex-col md:flex-row h-full gap-4 z-5 text-black overflow-hidden">
        {whatWeCanDo.map((option, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
          flex justify-center items-center
          bg-[#95E999]
          cursor-pointer
          transition-all duration-500 ease-in-out
          w-full
          md:${isActive ? "w-5/9" : "w-1/9 opacity-80 "}
        `}
            >
              {isActive ? (
                <div className="flex flex-col items-center justify-center p-4 md:p-8 h-full w-full gap-4">
                  <div className="text-center text-lg md:text-4xl font-bold">
                    {option.title}
                  </div>

                  <div className="flex flex-col gap-4 text-sm md:text-3xl text-center md:text-left">
                    <p>{option.description}</p>

                    <div className="flex flex-col gap-2">
                      <p className="font-bold">ผลลัพธ์ที่ลูกค้าได้รับ</p>
                      <p>{option.result}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="
              text-center text-lg md:text-xl font-bold p-4
              md:[writing-mode:sideways-lr]
            "
                >
                  {option.title}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
