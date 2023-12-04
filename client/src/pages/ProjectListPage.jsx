import { useState, useEffect } from "react";
import projectsService from "../services/projects.service";
import ProjectCard from "../components/ProjectCard";
import AddProject from "../components/AddProject";

const API_URL = "http://localhost:5005";

function ProjectListPage() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    projectsService
    .getAllProjects()
    .then((response) => setProjects(response.data))
    .catch((error) => console.log(error));
};

useEffect(() => {
  getAllProjects();
}, []);

  return (
    <div className="ProjectListPage">
      <AddProject refreshProjects={getAllProjects} />

      {projects.map((project) => (
        <ProjectCard key={project._id} {...project} />
      ))}
    </div>
  );
}

export default ProjectListPage;
