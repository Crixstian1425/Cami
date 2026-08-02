import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/layout/Footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: "var(--nav-height)" }} className="min-h-[100dvh]">
        {children}
      </main>
      <Footer />
    </>
  );
}
