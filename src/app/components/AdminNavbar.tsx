const navs = [
  {
    title: "applicants",
    href: "/admin/applicants",
  },
  {
    title: "contacts",
    href: "/admin/contacts",
  },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 translate-y-5 z-50 flex gap-8 px-8 py-3 bg-[#073328] opacity-80 text-white rounded-full font-semibold">
      {navs.map((nav) => (
        <a key={nav.title} href={nav.href}>
          {nav.title}
        </a>
      ))}
    </nav>
  );
}
