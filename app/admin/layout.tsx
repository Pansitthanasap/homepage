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
          { label: "Dashboard", href: "/admin/dashboard" },
          { label: "Applicants", href: "/admin/applicants" },
          { label: "Contacts", href: "/admin/contacts" },
          { label: "Insights", href: "/admin/insights" }
        ]} />
      </header>
      <div className="h-20 bg-[#F7F5F2]" />
      {children}
    </>
  );
}
