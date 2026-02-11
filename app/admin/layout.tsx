import Navbar from "../components/Navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="fixed top-0 flex w-full justify-center z-10 p-4">
        <Navbar links={[
          { label: "Applicants", href: "/admin/applicants" },
          { label: "Contacts", href: "/admin/contacts" },
          { label: "Article", href: "/admin/article" }
        ]} />
      </header>
      <div className="h-20 bg-[#F7F5F2]" />
      {children}
    </>
  );
}
