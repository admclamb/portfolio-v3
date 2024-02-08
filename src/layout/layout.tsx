import { ReactNode } from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/Footer";

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <header className="relative">
        <Navbar />
      </header>
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
