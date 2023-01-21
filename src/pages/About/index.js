import './styles.css'
import {Button, Image} from "react-bootstrap";
import me from "../../assets/me.jpg";
import resume from "../../assets/my_resume.pdf";

const About = () => {
    return (
        <div id="about" className="about">
            <h1>About Me</h1>
            <div className="container">
                <Image className="me-pic" src={me} />
                <div className="wrapper">
                    <h3>I am Fitriani</h3>
                    <p>I'm just about to start my career on software development. I have bachelor degree from Lampung University on Informatics Engineering, and I am currently a member of Enigma IT Bootcamp</p>
                    <Button href={resume} className="cvButton" style={{backgroundColor: '#051833'}} target="_blank">My Resume</Button>
                </div>
            </div>
        </div>
    )
}

export default About;