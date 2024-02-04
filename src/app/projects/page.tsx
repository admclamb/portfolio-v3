import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Container from "@/layout/container/container";
import Layout from "@/layout/layout";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <Layout>
      <Container className="py-6 flex flex-col gap-5">
        <div className="flex flex-col items-start gap-2">
          <Link
            href="/"
            className={`${buttonVariants({
              variant: "ghost",
            })} text-blue-600 dark:text-blue-400 -ml-3`}
          >
            ← Anthony Mclamb
          </Link>
          <h2 className="text-3xl font-semibold">View All Projects</h2>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">Year</TableHead>
              <TableHead className="font-semibold">Project</TableHead>
              <TableHead className="font-semibold">Built with</TableHead>
              <TableHead className="font-semibold">Links</TableHead>
              <TableHead className="font-semibold">Github</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-semibold text-slate-600 dark:text-slate-400">
                2023 - Current
              </TableCell>
              <TableCell className="font-semibold">Ai Adlibs</TableCell>
              <TableCell className="flex items-center gap-3 flex-wrap">
                <Badge>React</Badge>
                <Badge>Typescript</Badge>
                <Badge>nestJS</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>Openai</Badge>
              </TableCell>
              <TableCell>
                <a
                  href="https://aiadlibs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 duration-200 hover:underline underline-offset-2"
                >
                  Deployed Site
                  <ExternalLink size={18} />
                </a>
              </TableCell>
              <TableCell>
                <a
                  href="https://github.com/admclamb/ai-mad-lib-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 duration-200 hover:underline underline-offset-2"
                >
                  Github <Github size={18} />
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold text-slate-600 dark:text-slate-400">
                2023 - 2024
              </TableCell>
              <TableCell className="font-semibold">Weatherly</TableCell>
              <TableCell className="flex items-center gap-3 flex-wrap">
                <Badge>React</Badge>
                <Badge>Redux</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Tailwindcss</Badge>
                <Badge>Shadcn-ui</Badge>
              </TableCell>
              <TableCell>
                <a
                  href="https://weatherly2.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 duration-200 hover:underline underline-offset-2"
                >
                  Deployed Site
                  <ExternalLink size={18} />
                </a>
              </TableCell>
              <TableCell>
                <a
                  href="https://github.com/admclamb/weatherly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 duration-200 hover:underline underline-offset-2"
                >
                  Github <Github size={18} />
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold text-slate-600 dark:text-slate-400">
                2022 - 2023
              </TableCell>
              <TableCell className="font-semibold">
                China Garden Restaurant
              </TableCell>
              <TableCell className="flex items-center gap-3 flex-wrap">
                <Badge>React</Badge>
                <Badge>Redux</Badge>
                <Badge>JavaScript</Badge>
                <Badge>Express</Badge>
                <Badge>Mongoose</Badge>
                <Badge>MongoDB</Badge>
              </TableCell>
              <TableCell>
                <a
                  href="https://preview-cgbpk.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 duration-200 hover:underline underline-offset-2"
                >
                  Deployed Site
                  <ExternalLink size={18} />
                </a>
              </TableCell>
              <TableCell>
                <a
                  href="https://github.com/ZhiZheng0889/china-garden-big-pine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 duration-200 hover:underline underline-offset-2"
                >
                  Github <Github size={18} />
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold text-slate-600 dark:text-slate-400">
                2024 - Current
              </TableCell>
              <TableCell className="font-semibold">Algowars</TableCell>
              <TableCell className="flex items-center gap-3 flex-wrap">
                <Badge>React</Badge>
                <Badge>Redux</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Tailwindcss</Badge>
                <Badge>Nestjs</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>Typeorm</Badge>
                <Badge>Auth</Badge>
              </TableCell>
              <TableCell>
                <a
                  href="https://algowars.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 duration-200 hover:underline underline-offset-2"
                >
                  Deployed Site
                  <ExternalLink size={18} />
                </a>
              </TableCell>
              <TableCell>
                <a
                  href="https://github.com/algo-wars/algowars"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 duration-200 hover:underline underline-offset-2"
                >
                  Github <Github size={18} />
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Container>
    </Layout>
  );
}
