import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export default function ProjectCarousel() {
  return (
    <>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="h-64 flex justify-center items-center">
            <div className="flex flex-col gap-5 items-center">
              <div className="flex flex-col gap-1 items-center">
                <h4 className="text-2xl font-semibold">Ai Adlibs</h4>
                <p className="text-slate-600 dark:text-slate-400 max-w-[75%] text-center">
                  Application based around playing, generating adlibs using ai.
                  Browse, and react with other users generated adlibs
                </p>
              </div>

              <Link
                href="/projects/ai-adlibs"
                className={buttonVariants({ variant: "outline" })}
              >
                Show More
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem className="h-64 flex justify-center items-center">
            <div className="flex flex-col gap-5 items-center">
              <div className="flex flex-col gap-1 items-center">
                <h4 className="text-2xl font-semibold">Weatherly</h4>
                <p className="text-slate-600 dark:text-slate-400 max-w-[75%] text-center">
                  Weather Application that gets real time data based on users
                  locations.
                </p>
              </div>

              <Link
                href="/projects/weatherly"
                className={buttonVariants({ variant: "outline" })}
              >
                Show More
              </Link>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
