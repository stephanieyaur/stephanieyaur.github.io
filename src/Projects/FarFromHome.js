import { useEffect, useState } from "react/cjs/react.development";
import NavBar from "../NavBar";
import projectsData from "../projectsData";

import "./FreedomLink.css";

function FarFromHome(){

    const project = findProject();
    const [skills, setSkills] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        if (project && project.skills){
            setSkills(project.skills.map((skill) => {
                return(
                    <div key={skill} className="button white">{skill}</div>
                    )
            }))
        }
    }, [project])

    function findProject(){
        for (var i=0; i < projectsData.length; i++){
            if (projectsData[i].name === "Far From Home"){
                return projectsData[i]
            }
        }
    }

    return(
        <div>
            <NavBar selected={"projects"} />
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

export default FarFromHome;