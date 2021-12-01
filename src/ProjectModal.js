import { useEffect } from "react/cjs/react.development";
import "./ProjectModal.css";
import Button from '@mui/material/Button';
import { maxWidth } from "@mui/system";
import { Link } from "react-router-dom";

function ProjectModal({project}){

    
    
    useEffect(() => {
        console.log(project);
    })

    function skillsString(arr){
        let string = "";
        for (var i = 0; i < arr.length; i++) {
            if (i === 0){
                string += arr[i]
            }
            else{
                string += "," + arr[i]
            }
        }
        return string;
    }

    return (
        <div className="modal">
            <div className="inlineFlex">
                <div style={{marginRight: "30px", maxWidth: "50%"}}>
                    <p className="title">{project.name}</p>
                    <p className="description">{project.description}</p>
                    <br/>
                    <b>Position: </b>
                    <p>{project.position}</p>
                    <b>Skills: </b>
                    <p>{skillsString(project.skills)}</p>
                    <br />
                    {/* <Button variant="contained" style={{backgroundColor: '#FF9B8E', color: 'rbg(0,0,0)', }}>read more</Button> */}
                    <Link to={project.url}><div className="button primary"><p>read more</p></div></Link>
                </div>
                <img className="mainImage" src={project.mainImage} alt="project image"></img>
            </div>
        </div>
    )
}

export default ProjectModal;