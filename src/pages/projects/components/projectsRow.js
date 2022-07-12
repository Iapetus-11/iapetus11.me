import Project from "./project";

export default function ProjectsRow({ projects, idx }) {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center lg:space-x-16 lg:space-y-0 space-y-16">
      {projects?.map((project, i) => (
        <Project {...project} idx={idx * 2 + i} key={i} />
      ))}
    </div>
  );
}
