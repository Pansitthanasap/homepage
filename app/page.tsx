import Image from "next/image";
import Slogan from "./sections/Slogan";
import Navbar from "./components/Navbar";
import logo from "../public/logo.png";
import Link from "next/link";
import Problems from "./sections/Problems";
import WhoWeAre from "./sections/WhoWeAre";
import Packages from "./sections/Packages";
import Insights from "./sections/Insights";
import Testimonials from "./sections/Testimonials";
import AboutUs from "./sections/AboutUs";
import ContactUs from "./sections/ContactUs";
import Footer from "./components/Footer";
import Articles from "./sections/Articles";

export default function Home() {
  return (
    <div>
      <header className="fixed top-0 flex w-full justify-between z-10 p-4 pointer-events-none">
        <Link href="#slogan" className="pointer-events-auto">
          <Image
            src={logo}
            alt="Logo"
          />
        </Link>
        <Navbar className="pointer-events-auto" links={[
          { label: "Packages", href: "#packages" },
          { label: "Insights", href: "#insights" },
          { label: "About Us", href: "#about-us" },
          { label: "Contact Us", href: "#contact-us" },
        ]} />
        <div></div>
      </header>
      <main>
        <Slogan />
        <Problems />
        <WhoWeAre />
        <Packages />
        <Insights />
        <Testimonials />
        <AboutUs />
        <Articles />
        <ContactUs />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
