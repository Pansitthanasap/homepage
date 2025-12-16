import Link from "next/link";

export interface NavbarProps {
  links: Array<{
    label: string;
    href: string;
  }>;
  className?: string;
}

export default function Navbar({ links, className }: NavbarProps) {
  return (
    <nav className={`flex gap-4 justify-center content-center px-4 py-2 rounded-full bg-[#073328] backdrop-opacity-80 backdrop-blur-xl text-white text-sm font-bold${className ? (" " + className) : ""}`}>
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="content-center">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
