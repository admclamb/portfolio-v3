import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  title: string;
  description: ReactNode;
  tags: string[];
  githubLink?: string;
  deployLink?: string;
  imageUrl: string;
  orientation: "left" | "right";
  slug: string;
};

export default function FeaturedProjectCard({
  title,
  description,
  imageUrl,
  tags,
  githubLink,
  deployLink,
  orientation,
  slug,
}: Props) {
  return (
    <div
      className={`flex ${
        orientation === "left" ? "flex-row-reverse" : "flex-row"
      } relative`}
    >
      <div className="w-[60%] float-right relative rounded overflow-hidden">
        <a
          href={deployLink}
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <Image
            src={imageUrl}
            alt={title}
            layout="responsive"
            width={0}
            height={0}
            className="w-full"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-blue-300 dark:bg-blue-600 opacity-30 dark:opacity-20 hover:opacity-0 hover:dark:opacity-0 transition-opacity duration-300"></div>
        </a>
      </div>
      <div
        className={`w-[50%] flex flex-col gap-4 items-${
          orientation === "left" ? "start" : "end"
        } float-left absolute ${orientation}-0`}
      >
        <div
          className={`flex flex-col items-${
            orientation === "left" ? "start" : "end"
          }`}
        >
          <h5 className="text-blue-600 dark:text-blue-400 font-semibold">
            Featured Project
          </h5>
          <h4 className="text-2xl font-semibold">
            <Link
              href={`/projects/${slug}`}
              className="hover:underline underline-offset-3"
            >
              {title}
            </Link>
          </h4>
        </div>

        <Card className="p-5 text-slate-600 dark:text-slate-400">
          {description}
        </Card>
        <ul className="flex items-center gap-5">
          {tags.map((tag) => (
            <li
              key={tag}
              className="text-slate-600 dark:text-slate-400 text-sm"
            >
              {tag}
            </li>
          ))}
        </ul>
        <ul className="flex gap-5 items-center">
          {githubLink ? (
            <li>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 duration-200 hover:underline underline-offset-2"
              >
                <Github size={20} />
              </a>
            </li>
          ) : null}
          {deployLink ? (
            <li>
              <a
                href={deployLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 duration-200 hover:underline underline-offset-2"
              >
                <ExternalLink size={20} />
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
}
