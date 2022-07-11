import ProjectsRow from "./components/projectsRow";
import DesignatedPage from "../../ui/designatedPage";

import chunkArray from "../../lib/chunkArray";
import projects from "../../lib/data/projects";

const chunkedProjects = chunkArray(projects, 2);

export default function Projects() {
  return (
    <DesignatedPage title="Projects">
      {chunkedProjects?.map((ps, i) => (
        <ProjectsRow projects={ps} key={i} />
      ))}
    </DesignatedPage>
  );
}
