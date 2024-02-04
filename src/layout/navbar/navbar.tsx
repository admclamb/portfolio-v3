import { ThemeToggler } from "@/components/themes/theme-toggler";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b sticky top-0">
      <div className="max-w-5xl flex justify-between items-center mx-auto py-2">
        <Link href="/" className="py-3">
          <h1 className="font-semibold">Anthony Mclamb</h1>
        </Link>
        <ul className="flex items-center gap-6">
          <li>
            <Link
              href="/"
              className="hover:text-blue-600 dark:hover:text-blue-400 duration-200 text-sm font-semibold"
            >
              <span className="text-blue-600 dark:text-blue-400 mr-1">01.</span>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-blue-600 dark:hover:text-blue-400 duration-200 text-sm  font-semibold"
            >
              <span className="text-blue-600 dark:text-blue-400 mr-1">02.</span>
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="hover:text-blue-600 dark:hover:text-blue-400 duration-200 text-sm  font-semibold"
            >
              <span className="text-blue-600 dark:text-blue-400 mr-1">03.</span>
              Contact
            </Link>
          </li>
          <li>
            <ThemeToggler />
          </li>
        </ul>
      </div>
    </nav>
  );
}
