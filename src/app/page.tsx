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
        <div className="py-5 grid grid-cols-12 gap-5">
          <section className="col-span-8 flex flex-col gap-5">
            <Work />
          </section>
          <aside className="col-span-4 flex flex-col gap-5">
            <FeaturedProjects />
          </aside>
        </div>
      </Container>
    </Layout>
  );
}
