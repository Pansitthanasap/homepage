import Image from "next/image";
import contact_us_bg from "../../../../public/contact-us-bg.png";

export default function ContactUs() {
    return (
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
                    <form action=""></form>
                </div>
            </div>
        </div>
    );
}
