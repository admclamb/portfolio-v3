import Hero from "@/components/hero/hero";
import Container from "@/layout/container/container";
import Layout from "@/layout/layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Container>
        <div className="py-5 grid grid-cols-12 gap-5">
          <section className="col-span-8 flex flex-col gap-5"></section>
          <aside className="col-span-4 flex flex-col gap-5"></aside>
        </div>
      </Container>
    </Layout>
  );
}
