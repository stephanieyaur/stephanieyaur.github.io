import './Projects.css';
import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import projectsData from './projectsData';
import ProjectModal from './ProjectModal';
import NavBar from './NavBar';
import { Fragment } from 'react/cjs/react.development';

function Projects(){

    const [modal, setModal] = useState(false);
    const [clickedProject, setClickedProject] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        if (clickedProject != null){
            setModal(true);
        }
    }, clickedProject)

    // const firstUpdate = useRef(true);
    // useLayoutEffect(() => {
    //     if (firstUpdate.current) {
    //         firstUpdate.current = false;
    //         return;
    //     }

    //     setModal(true);
    // }, clickedProject)

    const projectsDataArr = projectsData.map((project) => {
        return(
            <div className="projectItem" onClick={() => setClickedProject(project)}>
                <img src={project.backgroundImage} className="backgroundImage" alt={project.name}></img>
                <h3 className="projectName">{project.name}</h3>
                <p className="projectDescription">{project.description}</p>
            </div>
        )    
    })

    return (
        <Fragment>
            <NavBar selected={"projects"}/>
            <div className="page">
                <h1>Projects</h1>
                <div className="inlineFlex">
                    {projectsDataArr}
                </div>

                { modal ? 
                    <ProjectModal project={clickedProject}/>
                : null}
            </div>
        </Fragment>
    )
}

export default Projects;