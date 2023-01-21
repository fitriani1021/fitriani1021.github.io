import {Nav, Navbar, NavLink} from "react-bootstrap";
import './styles.css'
import React from "react";
import HomeIcon from '@mui/icons-material/Home';

export const NavBar = () => (
    <Navbar sticky="top">
        <Nav className="navbar">
            <HomeIcon className="homeIcon" onClick={event => window.location.href = '/'}/>
            <div className="links">
                <NavLink style={{color: "#f2f2f2"}} className="nav-link" href="#about">About</NavLink>
                <NavLink style={{color: "#f2f2f2"}}  className="link" href="#project">Project</NavLink>
                <NavLink style={{color: "#f2f2f2"}}  className="link" href="#skill">Skill</NavLink>
                <NavLink style={{color: "#f2f2f2"}}  className="link" href="#contact">Contact</NavLink>
            </div>
        </Nav>
    </Navbar>
)
