import { Fragment } from "react/cjs/react.development";
import NavBar from "./NavBar";
import "./About.css";
import Stephanie from "./stephanie.jpg";

function About(){
    return (
        <Fragment>
            <NavBar selected={"about"} />
            <div className="page">
                <div className="aboutHeader">
                    <div className="textLeftAlign">
                        <h1>a bit about me ...</h1>
                        <div>
                            <h1 className="name">Stephanie Yaur</h1>
                        </div>
                    </div>
                    <div className="center">
                        <img src={Stephanie} id="Stephanie" alt=""></img>
                    </div>
                </div>
                <div className="textLeftAlign aboutme">
                    <p>I’m a <b>senior</b> studying <b>computer science</b> and <b>design</b> at <b>Northwestern University</b>. I am currently working on my <b>BS</b>, but will be getting my <b>MS</b> in the next year. With 4 internships to date, I have a lot of experience with <b>frontend development</b>, user research, and the design process. I value <b>empathy</b> and <b>hardwork</b> in the workplace, but also love to spend time laughing, watching kdramas, baking and (one day) spending time with my Chow Chow.</p>
                </div>
            </div>
        </Fragment>
    )
}

export default About;