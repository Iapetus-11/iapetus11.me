import ProjectsRow from "./components/projectsRow";
import DesignatedPage from "../../ui/designatedPage";

import chunkArray from "../../lib/chunkArray";
import projects from "../../lib/data/projects";

export default function Projects({ projectRows }) {
  return (
    <DesignatedPage title="Projects">
      <span className="fin fin-1 text-center text-white text-lg italic -my-4 md:-my-8 md:px-48">
        These are just a few of my many projects, I urge you to check out <a href="https://github.com/Iapetus-11" target="_blank" rel="noreferrer" className="text-cornflower-normal">my GitHub account</a> as well!
      </span>

      {projectRows?.map((ps, i) => (
        <ProjectsRow projects={ps} idx={i} key={i} />
      ))}
    </DesignatedPage>
  );
}

export function getStaticProps(context) {
  return {
    props: {
      projectRows: chunkArray(projects, 2)
    }
  }
}
