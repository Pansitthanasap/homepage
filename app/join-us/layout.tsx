import Footer from "../components/Footer";

export default function JoinUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<Footer /></>;
}