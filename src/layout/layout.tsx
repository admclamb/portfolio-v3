import { ReactNode } from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/Footer";

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <>
      <header className="relative">
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
