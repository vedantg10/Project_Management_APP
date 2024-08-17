import NewProject from "./Components/NewProject";
import NoProjectsSelected from "./Components/NoProjectsSelected.jsx";
import ProjectSidebar from "./Components/ProjectSidebar.jsx";
import { useState } from "react";
import SelectedProjects from "./Components/SelectedProjects.jsx";

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

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }
  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
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

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  let content = (
    <SelectedProjects
      project={selectedProject}
      onDelete={handleDeleteProject}
    />
  );
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
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
        onSelectProject={handleSelectProject}
        onStartAddProject={handleStartProject}
        projects={projectState.projects}
      ></ProjectSidebar>
      {content}
    </main>
  );
}

export default App;
