import React from "react";
import { Route, Routes } from 'react-router-dom';
import Hero from "../components/Hero/hero";
import ProjectGrid from "../components/ProjectGrid/projectGrid";
import ProjectInfo from "./ProjectInfo";


const Projects = () => {
    return (
        <div>
            <Hero>
                <h1>Projects</h1>
                <h2>My portfolio of work</h2>
            </Hero>
            <ProjectGrid />
            <Routes>
                <Route
                    path="Team-Profile-Generator"
                    element={<ProjectInfo />}
                />
            </Routes>
        </div>
    );
};

export default Projects;