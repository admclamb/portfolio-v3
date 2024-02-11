import Hero from "@/components/hero/hero";
import FeaturedProjectsAlt from "@/features/projects/featured-projects-alt/featured-projects-alt";
import Container from "@/layout/container/container";
import Layout from "@/layout/layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Container>
        <div className="py-5">
          <FeaturedProjectsAlt />
        </div>
      </Container>
    </Layout>
  );
}
