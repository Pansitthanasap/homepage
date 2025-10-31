"use client";
import { useState, useEffect } from "react";

export default function WhoWeAre() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showContentIndex, setShowContentIndex] = useState(0); // 👈 state แยกเพื่อควบคุมการแสดง content

  useEffect(() => {
    // delay แสดง content หลัง transition (700ms)
    const timer = setTimeout(() => {
      setShowContentIndex(activeIndex);
    }, 700);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const options = [
    {
      title: "Recruitment & Screening",
      content: (
        <div className="flex flex-col h-full justify-center">
          {" "}
          <p className="text-3xl font-normal mb-4">
            {" "}
            สรรหาและคัดกรองบุคลากรคุณภาพ ส่งรายชื่อภายใน 5–7 วัน{" "}
          </p>{" "}
          <p className="text-3xl font-bold mt-4">ผลลัพธ์ที่ลูกค้าได้รับ</p>{" "}
          <p className="text-3xl font-normal">
            {" "}
            ได้ คนที่ใช่ ตรงกับวัฒนธรรมองค์กร ลดเวลาในการหาคน{" "}
          </p>{" "}
        </div>
      ),
      baseClasses: "bg-[#D8F3DC] text-black",
    },
    {
      title: "HR Setup & System Design",
      content: (
        <div className="flex flex-col h-full justify-center">
          {" "}
          <p className="text-3xl font-normal mb-4">
            {" "}
            สร้างระบบ HR ตั้งแต่เริ่มต้น เช่น JD, KPI, Onboarding Process{" "}
          </p>{" "}
          <p className="text-3xl font-bold mt-4">ผลลัพธ์ที่ลูกค้าได้รับ</p>{" "}
          <p className="text-3xl font-normal">
            {" "}
            มีระบบบริหารคนที่เป็นมาตรฐาน พร้อมใช้งานจริง{" "}
          </p>{" "}
        </div>
      ),
      baseClasses: "bg-[#C6ECCA] text-black",
    },
    {
      title: "Payroll & Document Management",
      content: (
        <div className="flex flex-col h-full justify-center">
          {" "}
          <p className="text-3xl font-normal mb-4">
            {" "}
            วางระบบประเมินผล / Career Path / Exit Interview{" "}
          </p>{" "}
          <p className="text-3xl font-bold mt-4">ผลลัพธ์ที่ลูกค้าได้รับ</p>{" "}
          <p className="text-3xl font-normal">
            {" "}
            ทีมงานมีเป้าหมายชัดเจน ผลงานองค์กรเพิ่มขึ้น{" "}
          </p>{" "}
        </div>
      ),
      baseClasses: "bg-[#D8F3DC] text-black",
    },
    {
      title: "Performance Evaluation & KPI",
      content: (
        <div className="flex flex-col h-full justify-center">
          {" "}
          <p className="text-3xl font-normal mb-4">
            {" "}
            ให้คำปรึกษาเชิงกลยุทธ์โดยตรงกับเจ้าของธุรกิจ (CEO){" "}
          </p>{" "}
          <p className="text-3xl font-bold mt-4">ผลลัพธ์ที่ลูกค้าได้รับ</p>{" "}
          <p className="text-3xl font-normal">
            {" "}
            ได้คู่คิดที่เข้าใจธุรกิจจริง สร้างระบบคนให้เติบโตระยะยาว{" "}
          </p>{" "}
        </div>
      ),
      baseClasses: "bg-[#D8F3DC] text-black",
    },
    {
      title: "HR Business Partner (HRBP)",
      content: (
        <div className="flex flex-col h-full justify-center">
          {" "}
          <p className="text-3xl font-normal mb-4">
            {" "}
            สรรหาและคัดกรองบุคลากรคุณภาพ ส่งรายชื่อภายใน 5–7 วัน{" "}
          </p>{" "}
          <p className="text-3xl font-bold mt-4">ผลลัพธ์ที่ลูกค้าได้รับ</p>{" "}
          <p className="text-3xl font-normal">
            {" "}
            ได้ คนที่ใช่ ตรงกับวัฒนธรรมองค์กร ลดเวลาในการหาคน{" "}
          </p>{" "}
        </div>
      ),
      baseClasses: "bg-[#D8F3DC] text-black",
    },
  ];

  return (
    <div className="relative flex flex-col h-screen bg-[#FFF7EC] px-16 py-4 justify-center items-center gap-4">
      <div className="text-black text-5xl font-bold text-end w-full">
        เราคือทีม <span className="text-[#95E999]">HR Co-Pilot</span>
        <br />
        ที่เข้าใจ SME และ Startup อย่างแท้จริง
      </div>
      <div className="text-gray-500 text-xl text-end w-full">
        “คุณโฟกัสที่การเติบโตของธุรกิจ ส่วนเราดูแลเรื่อง{" "}
        <span className="font-bold">คน</span> ให้ทั้งหมด”
        เราไม่ได้แค่จัดหาพนักงาน แต่เราช่วยวางระบบ HR ที่ยั่งยืนตั้งแต่วันแรก
      </div>
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

      {/* 🔹 กล่องหลัก */}
      <div className="flex h-3/5 w-11/12 z-10 overflow-hidden gap-10 rounded-none">
        {options.map((option, index) => {
          const isActive = index === activeIndex;
          const showContent = index === showContentIndex;

          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative cursor-pointer overflow-hidden flex flex-col justify-center items-center transition-all duration-700 ease-in-out`}
              style={{
                flex: isActive ? 1 : "none",
                width: isActive ? "100%" : "120px",
                opacity: isActive ? 1 : 0.8,
                backgroundColor: "#95E999",
              }}
            >
              {/* 🔹 title (always visible) */}
              {!isActive && (
                <span className="text-xl md:text-2xl font-bold [writing-mode:vertical-rl] transform rotate-180 tracking-wider">
                  {option.title}
                </span>
              )}

              {/* 🔹 content (appear after transition) */}
              {isActive && (
                <div
                  className={`flex flex-col items-center justify-center text-center p-8 h-full w-full transition-opacity duration-500 ${
                    showContent ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="text-4xl md:text-5xl font-bold mb-6">
                    {option.title}
                  </div>
                  {option.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
