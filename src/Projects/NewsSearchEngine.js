import { useEffect, useState } from "react/cjs/react.development";
import projectsData from "../projectsData";
import NavBar from "../NavBar";

import "./NewsSearchEngine.css";

function NewsSearchEngine(){

    const [project, setProject] = useState(findProject());
    const [skills, setSkills] = useState(null);

    useEffect(() => {
        if (project && project.skills){
            setSkills(project.skills.map((skill) => {
                return(
                    <div className="button white">{skill}</div>
                    )
            }))
        }
    }, [project])

    function findProject(){
        for (var i=0; i < projectsData.length; i++){
            if (projectsData[i].name === "News Search Engine"){
                return projectsData[i]
            }
        }
    }

    return(
        <div>
            <NavBar selected={"projects"}/>
            <div className="projectTop">
                <div style={{marginRight: "30px", maxWidth: "50%", textAlign: "left"}}>
                    <p className="title">{project.name}</p>
                    <p className="description">{project.description}</p>
                    <br/>
                    <div className="textInline"><p>position: </p><div className="button white">{project.position}</div></div>
                    <br/>
                    <div className="textInline"><p>skills: </p>{skills}</div>
                    <br />
                </div>
                <img className="mainImage" src={project.mainImage} alt=""></img>
            </div>
        </div>
    )
}

export default NewsSearchEngine;