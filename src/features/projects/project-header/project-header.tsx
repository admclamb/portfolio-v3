import Container from "@/layout/container/container";
import Link from "next/link";
import dayjs from "dayjs";
import { buttonVariants } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ExternalLink } from "lucide-react";

type Props = {
  imageSlug: string;
  title: string;
  description: string;
  tags: string[];
  createdAt: Date;
  deployLink: string;
  githubLink: string;
};

export default function ProjectHeader({
  imageSlug,
  title,
  description,
  tags,
  createdAt,
  deployLink,
  githubLink,
}: Props) {
  return (
    <section className="h-[80vh]">
      <Container className="py-5 flex flex-col items-start justify-between h-full">
        <Link href="/projects" className={buttonVariants({ variant: "ghost" })}>
          {"<-"} Back To Projects
        </Link>
        <div className="flex flex-col gap-3 w-full">
          <p className="uppercase font-semibold text-blue-600 dark:text-blue-400">
            {dayjs(createdAt).format("dddd YYYY")}
          </p>
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-[50%]">
            {description}
          </p>
          <hr />
          <div className="flex items-center gap-3">
            {deployLink ? (
              <a
                href={deployLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-28 ${buttonVariants({ variant: "secondary" })}`}
              >
                Site <ExternalLink size={18} className="ml-3" />
              </a>
            ) : null}
            {githubLink ? (
              <a
                href={deployLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-28 ${buttonVariants({ variant: "outline" })}`}
              >
                Github <FontAwesomeIcon icon={faGithub} className="ml-3" />
              </a>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
