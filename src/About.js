import { Fragment } from "react/cjs/react.development";
import NavBar from "./NavBar";

function About(){
    return (
        <Fragment>
            <NavBar selected={"about"} />
            <h1>About</h1>
        </Fragment>
    )
}

export default About;