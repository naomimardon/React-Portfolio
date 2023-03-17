import React from "react";
import Hero from "../components/Hero/hero";
import ProjectGrid from "../components/ProjectGrid/projectGrid";


const Projects = () => {
    return (
        <div>
            <Hero>
                <h1>Projects</h1>
                <h2>My portfolio of work</h2>
            </Hero>
            <ProjectGrid />
        </div>
    );
};

export default Projects;