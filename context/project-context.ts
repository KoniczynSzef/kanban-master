import { Project } from "@/types/models/project-model";
import React from "react";

type ProjectContext = {
    initialProjects: Project[];
    projects: Project[];
    setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
};

export const ProjectContext = React.createContext<ProjectContext>({
    initialProjects: [],
    projects: [],
    setProjects: () => [],
});
