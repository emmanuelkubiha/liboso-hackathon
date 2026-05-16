import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { ChatBox } from '@/components/common/ChatBox';

export default function RootPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <ChatBox />
      <Footer />
    </>
  );
}
