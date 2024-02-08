import Hero from "@/components/hero/hero";
import FeaturedProjects from "@/features/projects/featured-projects/featured-projects";
import Work from "@/features/work/work";
import Container from "@/layout/container/container";
import Layout from "@/layout/layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Container>
        <div className="py-5">
          <Work />
        </div>
      </Container>
    </Layout>
  );
}
