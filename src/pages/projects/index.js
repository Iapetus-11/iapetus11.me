import Default from "../../ui/default";
import NavButton from "../../ui/navButton";
import ProjectsRow from "./components/projectsRow";

import chunkArray from "../../lib/chunkArray";
import projects from "../../lib/data/projects";

export default function Projects() {
  let chunkedProjects = chunkArray(projects, 2);
  
  return (
    <Default>
      {/* home page button and projects title */}
      {/* <div className="flex flex-row flex-wrap-reverse items-center justify-center text-lg text-white space-x-8 md:space-x-8 px-16 pt-4 md:pt-16 space-y-8 md:space-y-0">
        <div className="w-0 p-0 -m-2 md:m-0"></div> {/* for some reason, size of next item is fucked if I don't do this

        <NavButton href="/" name={" \u200B Home"} idx="1">
          <i className="fas fa-chevron-left py-1"></i>
        </NavButton>

        <span className="fin fin-1 text-6xl text-white text-left font-semibold md:pb-1 pl-0 md:pl-8">Projects</span>
      </div> */}
      <div className="flex flex-col md:flex-row self-center w-full md:px-48 pt-12">
        <span className="text-6xl text-white text-left font-semibold self-center">Projects</span>

        <div className="flex flex-row justify-self-right space-x-4 float-right md:ml-auto pt-5 self-center">
          <NavButton href="/" idx="1" name="Home" />
          <NavButton href="https://github.com/Iapetus-11" idx="2" name="GitHub" />
        </div>
      </div>

      {/* column containing projects */}
      <div className="flex flex-col items-center justify-center px-8 py-16 space-y-16">
        { chunkedProjects?.map((ps, i) => <ProjectsRow projects={ps} key={i} />) }
      </div>
    </Default>
  )
}
