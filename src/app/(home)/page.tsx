import Image from "next/image";
import handshake from "../../../public/handshake.png";
import contact_us_bg from "../../../public/contact-us-bg.png";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Homepage */}
      <div className="relative flex flex-col h-screen bg-[#073328]">
        <Image
          src={handshake}
          alt="Handshake"
          className="absolute left-0 bottom-0 w-full"
          draggable={false}
          loading="eager"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full gap-6 flex flex-col">
          <div className="font-[Crimson_Text] text-[80px] text-white text-center">
            We Build Teams That Build Your Business
          </div>
          <div className="text-[32px] leading-[85%] text-white text-center">
            เราสร้างทีมให้คุณ เพื่อสร้างธุรกิจให้โต
          </div>
        </div>
      </div>
      {/* Problems */}
      <div className="relative flex flex-col h-screen bg-[#FFF7EC] px-16 py-4">
        <div className="text-black text-[64px] font-bold">เจ้าของ <span className="text-[#95E999]">SME / Startup</span><br />กำลังเจอปัญหาเหล่านี้อยู่หรือเปล่า?</div>
        <div className="text-gray-500 text-[32px]">เมื่อธุรกิจเริ่มโตขึ้น… แต่ <span className="font-bold">คน</span> ยังไม่พร้อม <br /> นี่คือ 4 ปัญหาหลักที่เราพบในทุกบริษัทก่อนเริ่มใช้บริการของเรา</div>
      </div>
      {/* Who We Are */}
      <div className="relative flex flex-col h-screen bg-[#FFF7EC] px-16 py-4">
        <div className="text-black text-[64px] font-bold text-end">เราคือทีม <span className="text-[#95E999]">HR Co-Pilot</span><br />ที่เข้าใจ SME และ Startup อย่างแท้จริง</div>
        <div className="text-gray-500 text-[32px] text-end">“คุณโฟกัสที่การเติบโตของธุรกิจ ส่วนเราดูแลเรื่อง <span className="font-bold">คน</span> ให้ทั้งหมด” เราไม่ได้แค่จัดหาพนักงาน แต่เราช่วยวางระบบ HR ที่ยั่งยืนตั้งแต่วันแรก</div>
        <svg viewBox="0 0 1440 322" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 bottom-0 w-full">
          <g clipPath="url(#clip0_14_106)">
            <g clipPath="url(#paint0_angular_14_106_clip_path)" data-figma-skip-parse="true"><g transform="matrix(0 0.13475 -0.2085 0 1032.5 194.75)"><foreignObject x="-1860.85" y="-1860.85" width="3721.71" height="3721.71"><div style={{ background: "conic-gradient(from 90deg,rgba(52, 94, 70, 0.3555) 0deg,rgba(37, 67, 50, 0.5) 48.1799deg,rgba(47, 82, 59, 0.8) 72.1932deg,rgba(93, 150, 101, 0.2) 186.412deg,rgba(72, 127, 93, 1) 284.205deg,rgba(69, 124, 92, 0.2) 308.158deg,rgba(52, 94, 70, 0.3555) 360deg)", height: "100%", width: "100%", opacity: 1 }}></div></foreignObject></g></g><path opacity="0.5" d="M823 332.5L870.329 336.532C875.574 274.956 889.137 233.351 911.543 202.71C933.677 172.441 968.279 147.652 1025.85 127.168L1009.92 82.417L993.998 37.6656C924.916 62.2462 871.701 96.2514 834.858 146.635C798.287 196.646 781.713 257.551 775.671 328.468L823 332.5ZM1199.39 112.571L1167.72 147.973C1196.59 173.805 1207.73 197.966 1210.4 223.625C1213.33 251.722 1206.66 286.711 1189.36 334.264L1234 350.5L1278.64 366.736C1297.55 314.753 1310.07 263.43 1304.89 213.773C1299.46 161.678 1275.18 116.642 1231.05 77.1682L1199.39 112.571ZM1009.92 82.417L1025.85 127.168C1077.44 108.81 1132.61 116.569 1167.72 147.973L1199.39 112.571L1231.05 77.1682C1164.57 17.6977 1070.82 10.3315 993.998 37.6656L1009.92 82.417Z" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.14509804546833038,&#34;g&#34;:0.26274511218070984,&#34;b&#34;:0.19607843458652496,&#34;a&#34;:0.50},&#34;position&#34;:0.13383314013481140},{&#34;color&#34;:{&#34;r&#34;:0.18553225696086884,&#34;g&#34;:0.32214403152465820,&#34;b&#34;:0.23293440043926239,&#34;a&#34;:0.80000001192092896},&#34;position&#34;:0.20053668320178986},{&#34;color&#34;:{&#34;r&#34;:0.36666667461395264,&#34;g&#34;:0.58823531866073608,&#34;b&#34;:0.39803922176361084,&#34;a&#34;:0.20000000298023224},&#34;position&#34;:0.51781088113784790},{&#34;color&#34;:{&#34;r&#34;:0.28450471162796021,&#34;g&#34;:0.50104302167892456,&#34;b&#34;:0.36618050932884216,&#34;a&#34;:1.0},&#34;position&#34;:0.78945952653884888},{&#34;color&#34;:{&#34;r&#34;:0.27058824896812439,&#34;g&#34;:0.48627451062202454,&#34;b&#34;:0.36078432202339172,&#34;a&#34;:0.20000000298023224},&#34;position&#34;:0.85599559545516968}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.14509804546833038,&#34;g&#34;:0.26274511218070984,&#34;b&#34;:0.19607843458652496,&#34;a&#34;:0.50},&#34;position&#34;:0.13383314013481140},{&#34;color&#34;:{&#34;r&#34;:0.18553225696086884,&#34;g&#34;:0.32214403152465820,&#34;b&#34;:0.23293440043926239,&#34;a&#34;:0.80000001192092896},&#34;position&#34;:0.20053668320178986},{&#34;color&#34;:{&#34;r&#34;:0.36666667461395264,&#34;g&#34;:0.58823531866073608,&#34;b&#34;:0.39803922176361084,&#34;a&#34;:0.20000000298023224},&#34;position&#34;:0.51781088113784790},{&#34;color&#34;:{&#34;r&#34;:0.28450471162796021,&#34;g&#34;:0.50104302167892456,&#34;b&#34;:0.36618050932884216,&#34;a&#34;:1.0},&#34;position&#34;:0.78945952653884888},{&#34;color&#34;:{&#34;r&#34;:0.27058824896812439,&#34;g&#34;:0.48627451062202454,&#34;b&#34;:0.36078432202339172,&#34;a&#34;:0.20000000298023224},&#34;position&#34;:0.85599559545516968}],&#34;transform&#34;:{&#34;m00&#34;:2.5533889510143820e-14,&#34;m01&#34;:-417.00012207031250,&#34;m02&#34;:1241.0001220703125,&#34;m10&#34;:269.49993896484375,&#34;m11&#34;:1.6502114412908671e-14,&#34;m12&#34;:60.0},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}" />
            <path opacity="0.5" d="M275 327H448C255.37 205.332 156.528 132.327 0 0V124C109.212 213.124 171.856 259.057 275 327Z" fill="url(#paint1_linear_14_106)" />
          </g>
          <defs>
            <clipPath id="paint0_angular_14_106_clip_path"><path opacity="0.5" d="M823 332.5L870.329 336.532C875.574 274.956 889.137 233.351 911.543 202.71C933.677 172.441 968.279 147.652 1025.85 127.168L1009.92 82.417L993.998 37.6656C924.916 62.2462 871.701 96.2514 834.858 146.635C798.287 196.646 781.713 257.551 775.671 328.468L823 332.5ZM1199.39 112.571L1167.72 147.973C1196.59 173.805 1207.73 197.966 1210.4 223.625C1213.33 251.722 1206.66 286.711 1189.36 334.264L1234 350.5L1278.64 366.736C1297.55 314.753 1310.07 263.43 1304.89 213.773C1299.46 161.678 1275.18 116.642 1231.05 77.1682L1199.39 112.571ZM1009.92 82.417L1025.85 127.168C1077.44 108.81 1132.61 116.569 1167.72 147.973L1199.39 112.571L1231.05 77.1682C1164.57 17.6977 1070.82 10.3315 993.998 37.6656L1009.92 82.417Z" /></clipPath><linearGradient id="paint1_linear_14_106" x1="0.500002" y1="56.5" x2="347" y2="326" gradientUnits="userSpaceOnUse">
              <stop stopColor="#95E999" stopOpacity="0.5" />
              <stop offset="0.865385" />
            </linearGradient>
            <clipPath id="clip0_14_106">
              <rect width="1440" height="322" fill="white" />
            </clipPath>
          </defs>
        </svg>

      </div>
      {/* Packages */}
      <div className="relative flex flex-col h-screen bg-[#2D2D2D] px-10 py-16" id="packages">
        <svg viewBox="0 0 1440 597" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0 w-full">
          <g clipPath="url(#clip0_15_108)">
            <path d="M1065.11 -270.245C1126.72 -284.782 1197.67 -284.502 1249.34 -243.824C1304.4 -200.478 1319.66 -126.456 1301.28 -35.0193C1276.62 87.6292 1217.17 166.814 1136.66 212.973C1086.94 241.479 1031.41 256.089 975.379 262.465C1048.08 340.322 1148.78 406.205 1248.13 448.892C1311.58 476.154 1371.87 492.801 1420.89 497.6C1472.45 502.648 1500.77 493.671 1512.3 483.701L1574.44 555.554C1532.51 591.821 1470.41 597.903 1411.63 592.148C1350.3 586.143 1280.33 566.124 1210.63 536.176C1079.61 479.882 940.27 384.395 855.069 265.514C829.306 264.278 803.848 262.063 779.162 259.341C721.853 253.021 648.277 223.365 574.221 186.25C498.609 148.356 416.984 99.8095 341.837 51.0705C266.647 2.30379 197.117 -47.1922 145.64 -87.2976C119.996 -107.276 98.1897 -125.422 82.2314 -140.298C74.339 -147.655 67.057 -154.969 61.2842 -161.82C58.4134 -165.227 55.2557 -169.294 52.4746 -173.795C50.1813 -177.506 45.7015 -185.321 44 -195.659L137.738 -211.087C136.444 -218.949 133.326 -223.676 133.291 -223.731C132.773 -224.57 132.783 -224.399 133.935 -223.032C136.207 -220.335 140.393 -215.955 147.008 -209.789C160.064 -197.618 179.426 -181.404 204.025 -162.239C253.032 -124.058 320.284 -76.1403 393.531 -28.6336C466.821 18.9008 545.288 65.4879 616.785 101.32C689.837 137.931 750.385 160.591 789.576 164.913C792.968 165.287 796.364 165.648 799.763 165.998C777.33 109.832 767.71 49.3251 777.425 -13.618C787.529 -79.0825 832.135 -136.358 883.605 -178.842C935.908 -222.012 1001.56 -255.248 1065.11 -270.245ZM1190.58 -169.179C1172.58 -183.347 1137.47 -189.711 1086.93 -177.785C1038.34 -166.318 985.766 -139.985 944.079 -105.576C901.56 -70.4804 876.413 -32.1653 871.313 0.87326C862.485 58.0762 876.082 115.529 907.577 171.526C976.556 170.609 1039.27 159.303 1089.41 130.557C1143.39 99.6108 1188.22 45.3525 1208.14 -53.742C1223.2 -128.652 1205.19 -157.679 1190.58 -169.179Z" fill="url(#paint0_linear_15_108)" />
          </g>
          <defs>
            <linearGradient id="paint0_linear_15_108" x1="233.369" y1="60.6275" x2="1544.87" y2="365.627" gradientUnits="userSpaceOnUse">
              <stop offset="0.0721154" />
              <stop offset="1" stopColor="#64B386" />
            </linearGradient>
            <clipPath id="clip0_15_108">
              <rect width="1440" height="597" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div className="text-[64px] font-bold z-1"><span className="text-[#64B386]">HR Outsource</span> ที่เหมาะกับธุรกิจของคุณ</div>
      </div>
      {/* Insights */}
      <div className="relative flex flex-col h-screen bg-[#2D2D2D] px-10 py-16" id="insights">
        <div className="text-[64px] font-bold">เพราะเราไม่ใช่แค่จัดหาคน<br />แต่เราสร้าง <span className="text-[#95E999]">ทุนมนุษย์</span> ให้คุณ</div>
        <div className="text-[24px] text-gray-400">จาก “People” สู่ “Performance” เราคือพาร์ตเนอร์ HR ที่ช่วยให้ธุรกิจของคุณเติบโตได้อย่างยั่งยืน<br />ด้วยระบบการบริหารคนที่ครบวงจร เข้าใจ SME และคุ้มค่าที่สุดในตลาด</div>
      </div>
      {/* Our Clients */}
      <div className="relative flex flex-col h-screen bg-[#2D2D2D] px-10 py-16" id="insights">
        <div className="text-[64px] font-bold">ลูกค้าจริงที่ไว้วางใจเรา</div>
        <div className="text-[36px] text-gray-400">“เราทำงานในฐานะ HR Co-Pilot ให้ SME/Startup<br />ตั้งแต่สรรหา วางระบบ จนถึงประเมินผล เพื่อให้ธุรกิจโฟกัสการเติบโตได้เต็มที่”</div>
      </div>
      {/* About Us */}
      <div className="relative flex flex-col h-screen bg-[#F7F5F2] px-10 py-16 justify-center items-center" id="about">
        <svg viewBox="0 0 1440 226" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <rect opacity="0.5" x="35" y="104" width="61" height="61" fill="#4CAF50" />
          <rect opacity="0.4" x="802" y="32" width="54" height="54" fill="#073328" />
          <rect opacity="0.3" x="1333" y="154" width="72" height="72" fill="#95E999" />
          <rect opacity="0.3" x="396" y="135" width="40" height="40" fill="#00BE85" />
        </svg>
        <svg viewBox="0 0 1440 191" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 -top-4 w-full">
          <g clipPath="url(#clip0_16_139)">
            <path d="M461 114C265 255.2 72 172.833 0 114V0H1532.5V114C1363.91 193.118 1195.87 192.739 1064.67 172.765C908.003 148.914 747.151 3.28661 594.581 46.1176C554.669 57.3219 510.059 78.6577 461 114Z" fill="#2D2D2D" stroke="#2D2D2D" />
          </g>
          <defs>
            <clipPath id="clip0_16_139">
              <rect width="1440" height="191" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div className="flex flex-row h-4/5 w-5/6">
          <div className="h-full w-2 bg-[#95E999]" />
          <div className="flex flex-col h-full w-full gap-4 px-4">
            <div className="w-full text-center text-5xl text-[#4CAF50] font-bold">“เราสร้างทีมให้คุณ เพื่อสร้างธุรกิจให้โต”</div>
            <div className="text-2xl text-black">บริษัท พรรษิษฐ์ธนทรัพย์ จำกัด (Pansitthanasap Co., Ltd.)<br />คือทีม HR Outsourcing ที่ก่อตั้งขึ้นเพื่อช่วยเจ้าของธุรกิจ SME และ Startup<br />ที่ยังไม่มีฝ่าย HR แต่ต้องการวางระบบคนอย่างถูกต้องตั้งแต่วันแรก</div>
            <div className="text-2xl text-black">เราเชื่อว่าความสำเร็จของทุกองค์กรไม่ได้เริ่มจากสินค้าเท่านั้น<br />แต่เริ่มจาก <span className="text-[#4CAF50] font-bold">ทีมงานที่มีคุณภาพและระบบบริหารคนที่ชัดเจน</span></div>
            <div className="text-2xl text-black">ด้วยประสบการณ์ในวงการ HR และการพัฒนาองค์กรสำหรับธุรกิจขนาดเล็ก<br />เราจึงออกแบบบริการ HR ที่เข้าใจง่าย ยืดหยุ่น และตอบโจทย์ธุรกิจจริง<br />เพื่อให้เจ้าของกิจการสามารถโฟกัสกับการเติบโตของธุรกิจได้อย่างเต็มที่<br />โดยมีเราเป็น <span className="text-[#4CAF50] font-bold">HR Co-Pilot</span> ที่พร้อมดูแลทุกขั้นตอนแทนคุณ</div>
          </div>
        </div>
      </div>
      {/* Contact Us*/}
      <div className="relative flex flex-col" id="contact">
        <Image
          src={contact_us_bg}
          alt="Contact Us Background"
          className="w-full"
          draggable={false}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-[#2D2D2D] via-[#324233]/50 to-[#4CAF50]/60" />
        <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center">
          <div className="bg-white w-5/6 h-10/12 rounded-[50px] flex justify-center items-center">
            <div className="text-[40px] text-black font-bold">ติดต่อเรา</div>
          </div>
        </div>
      </div>
    </div>
  );
}
