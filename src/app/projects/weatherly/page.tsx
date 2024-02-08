import ProjectHeader from "@/features/projects/project-header/project-header";
import Layout from "@/layout/layout";
import Image from "next/image";

export default function Weatherly() {
  return (
    <Layout>
      <ProjectHeader
        imageSlug={"/images/weatherly-demo.png"}
        title="Weatherly"
        description="Weather application that gets real time data from users location."
        tags={["JavaScript", "React", "Vite", "TailwindCSS"]}
        createdAt={new Date()}
        deployLink="https://weatherly2.netlify.app"
        githubLink="https://github.com/admclamb/weatherly"
      />
    </Layout>
  );
}
