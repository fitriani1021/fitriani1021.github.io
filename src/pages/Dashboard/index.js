import './styles.css'
import ReactTyped from "react-typed";
import {Image} from "react-bootstrap";
import logo from "../../assets/logo.jpeg"

const Dashboard = () => {

    return (
        <div className="dashboard" id="home">
            <div className="container">
                <div className="title">
                    <h1 className="hello">Hi There, Hello!</h1>
                    <h1 className="hello">I'm Fitriani</h1>
                    <div className="subtitle">
                        <p>I am into</p>
                        <ReactTyped
                            className="stack"
                            strings={[
                                'Backend Development',
                                'Frontend Development'
                            ]}
                            typeSpeed={50}
                            backSpeed={50}
                            loop
                        />
                    </div>
                </div>
                <Image src={logo} className="logo" />
            </div>
        </div>
    )
}

export default Dashboard;