import Container from "@/layout/container/container";

import { buttonVariants } from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-[40vh] border-b">
      <Container className="h-full flex flex-col justify-center gap-5">
        <div>
          <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
            Hello! I&apos;m,
          </p>
          <h2 className="text-5xl font-bold">Anthony Mclamb</h2>
        </div>

        <p className="max-w-2xl text-slate-600 dark:text-slate-400 mb-3">
          As a Software Engineer, I specialize in developing accessible and
          intuitive websites, aiming to create seamless digital experiences for
          all users. My passion is to bridge technology with accessibility,
          making the web a more inclusive place.
        </p>
        <ul className="flex items-center gap-3">
          <li>
            <Link
              href="/projects"
              className={`${buttonVariants({ variant: "default" })} w-28`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className={`${buttonVariants({ variant: "secondary" })} w-28`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}
