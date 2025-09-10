
import Navbar from '@/components/client/Navbar';
// import Footer from '@/components/client/Footer';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      {/* <Footer /> */}
    </>
  );
}