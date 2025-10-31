import Image from "next/image";
import helpWanted from "../../../../public/resources/help-wanted.jpeg";
import noHR from "../../../../public/resources/no-hr.jpeg";
import unclearManagement from "../../../../public/resources/unclear-management.jpeg";
import highTurnover from "../../../../public/resources/high-turnover.jpeg";

export default function Problems() {
    return (
        <div className="relative flex flex-col h-screen bg-[#FFF7EC] px-16 py-4 justify-center items-center gap-4">
            <div className="text-black text-6xl font-bold w-full">เจ้าของ <span className="text-[#95E999]">SME / Startup</span><br />กำลังเจอปัญหาเหล่านี้อยู่หรือเปล่า?</div>
            <div className="text-gray-500 text-4xl w-full">เมื่อธุรกิจเริ่มโตขึ้น… แต่ <span className="font-bold">คน</span> ยังไม่พร้อม <br /> นี่คือ 4 ปัญหาหลักที่เราพบในทุกบริษัทก่อนเริ่มใช้บริการของเรา</div>
            <div className="h-11/12 w-11/12 flex flex-row justify-between">
                <div className="flex flex-col w-3/13 h-full gap-2">
                    <div className="flex-1"><Image src={helpWanted} alt="Help Wanted" className="object-fill rounded-4xl" /></div>
                    <div className="w-full text-2xl font-bold text-center text-black">ขาดแคลนบุคลากรคุณภาพ</div>
                </div>
                <div className="flex flex-col w-3/13 h-full gap-2">
                    <div className="flex-1"><Image src={noHR} alt="No HR" className="object-fill rounded-4xl" /></div>
                    <div className="w-full text-2xl font-bold text-center text-black">ไม่มีฝ่าย HR ประจำ</div>
                </div>
                <div className="flex flex-col w-3/13 h-full gap-2">
                    <div className="flex-1"><Image src={unclearManagement} alt="Unclear Management" className="object-fill rounded-4xl" /></div>
                    <div className="w-full text-2xl font-bold text-center text-black">ขาดระบบบริหารคนที่ชัดเจน</div>
                </div>
                <div className="flex flex-col w-3/13 h-full gap-2">
                    <div className="flex-1"><Image src={highTurnover} alt="High Turnover" className="object-fill rounded-4xl" /></div>
                    <div className="w-full text-2xl font-bold text-center text-black">หาคนยาก / คนลาออกบ่อย</div>
                </div>
            </div>
        </div>
    );
}
