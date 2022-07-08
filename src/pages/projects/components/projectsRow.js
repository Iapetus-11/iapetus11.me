import Project from "./project";

export default function ProjectsRow(props) {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center lg:space-x-16 lg:space-y-0 space-y-16">
      {props.projects.map((p, i) => <Project name={p.name} description={p.description} image={p.image} href={p.href} idx={i} key={i} />)}
    </div>
  )
}
