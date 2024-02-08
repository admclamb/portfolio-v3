import ProjectCarousel from "../projects/project-carousel/project-carousel";
import WorkSelect from "./work-select/work-select";

export default function Work() {
  return (
    <section>
      <div className="flex justify-between border-b pb-5">
        <h3 className="text-2xl font-semibold">My Work</h3>
        <WorkSelect />
      </div>
      <ProjectCarousel />
    </section>
  );
}
