import './Projects.css';
import { useEffect } from 'react'

function Projects(){

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="page">
            <h1>Projects</h1>
            <div className="inlineFlex">
                <div className="projectItem"></div>
                <div className="projectItem"></div>
                <div className="projectItem"></div>
                <div className="projectItem"></div>
                <div className="projectItem"></div>
                <div className="projectItem"></div>
                <div className="projectItem"></div>
                <div className="projectItem"></div>
                <div className="projectItem"></div>
                <div className="projectItem"></div>
                <div className="projectItem"></div>
                <div className="projectItem"></div>
            </div>
        </div>
    )
}

export default Projects;