import AllProjects from "../components/Projects/AllProjects";
import ProjectBanner from "../components/Projects/ProjectBanner";
import Subscribe from "../components/Shared/Subscribe";

const Projects = () => {
  return (
    <div>
      <ProjectBanner />
      <AllProjects />
      <Subscribe />
    </div>
  );
};

export default Projects;
