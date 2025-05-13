import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

type LayoutProps = {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen flex flex-col dark">
      <Header />
      <main className="flex flex-1 flex-col mb-12">
        {children}
      </main>
      <Footer />
    </div>
  );
  
}

export { Layout }