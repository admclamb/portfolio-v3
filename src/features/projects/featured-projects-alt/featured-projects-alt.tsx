import { ExternalLink } from "lucide-react";
import FeaturedProjectCard from "./featured-project-card/featured-project-card";
import { ReactNode } from "react";

export default function FeaturedProjectsAlt() {
  const projects: {
    title: string;
    description: ReactNode;
    tags: string[];
    deployLink?: string;
    githubLink?: string;
    imageUrl: string;
    slug: string;
  }[] = [
    {
      title: "Ai Adlibs",
      description: (
        <p>
          A web application for users to create ai generated adlibs. Users have
          the ability to share, and look at other users adlibs. Currently has{" "}
          <span className="text-blue-600 dark:text-blue-400">
            1.3k New Users
          </span>{" "}
          a month.{" "}
        </p>
      ),
      tags: ["React", "TypeScript", "NestJS", "PostgreSQL", "Openai"],
      deployLink: "https://aiadlibs.com/",
      githubLink: "https://github.com/admclamb/ai-mad-lib-generator",
      imageUrl: "/images/aiadlibs-demo.png",
      slug: "ai-adlibs",
    },
    {
      title: "Weatherly",
      description: (
        <p>
          Weatherly is your go-to weather application that effortlessly combines
          real-time, location-based weather forecasts with the ability to search
          and view weather predictions for any city worldwide. With its
          user-friendly interface, Weatherly offers detailed insights into
          temperature variations, precipitation, and more.
        </p>
      ),
      tags: ["React", "TypeScript", "NestJS", "PostgreSQL", "Openai"],
      deployLink: "https://weatherly2.netlify.app",
      githubLink: "https://github.com/admclamb/weatherly",
      imageUrl: "/images/weatherly-demo.png",
      slug: "weatherly",
    },
  ];
  return (
    <section>
      <ul className="flex flex-col gap-16 mb-9">
        {projects.map((project, index) => (
          <li key={project.title}>
            <FeaturedProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubLink={project.githubLink}
              deployLink={project.deployLink}
              imageUrl={project.imageUrl}
              orientation={index % 2 === 0 ? "right" : "left"}
              slug={project.slug}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
