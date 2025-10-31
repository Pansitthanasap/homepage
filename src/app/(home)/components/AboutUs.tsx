export default function AboutUs() {
    return (
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
    );
}
