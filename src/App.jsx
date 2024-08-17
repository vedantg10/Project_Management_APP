import NewProject from "./Components/NewProject";
import NoProjectsSelected from "./Components/NoProjectsSelected.jsx";
import ProjectSidebar from "./Components/ProjectSidebar.jsx";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        id: projectId,
        ...projectData,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = (
      <NoProjectsSelected
        onStartAddProject={handleStartProject}
      ></NoProjectsSelected>
    );
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartProject}
        projects={projectState.projects}
      ></ProjectSidebar>
      {/* <NewProject></NewProject> */}
      {content}
    </main>
  );
}

export default App;
