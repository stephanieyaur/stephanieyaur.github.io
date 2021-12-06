import { Fragment } from "react/cjs/react.development";
import NavBar from "./NavBar";

function Skills(){
    return (
        <Fragment>
            <NavBar selected={"skills"} />
            <div className="page">
                <h1>Skills</h1>
            </div>
        </Fragment>
    )
}

export default Skills;