import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

type Props = {
  className?: string;
};

export default function NavbarMobile({ className = "" }: Props) {
  return (
    <div className={className}>
      <Sheet>
        <SheetTrigger className="p-2">
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <SheetHeader>
            <div className="flex justify-start">
              <Link href="/" className="font-semibold">
                Ai Adlibs
              </Link>
            </div>
          </SheetHeader>
          <div className="flex flex-col gap-5">
            <ul className="gap-5 flex flex-col">
              <li>
                <Link href="/" className="py-2 pl-0 pr-2 block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/browse" className="py-2 pl-0 pr-2 block">
                  Browse
                </Link>
              </li>
              <li>
                <Link href="/saves" className="py-2 pl-0 pr-2 block">
                  Saves
                </Link>
              </li>
              <li>
                <Link href="/settings" className="py-2 pl-0 pr-2 block">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
