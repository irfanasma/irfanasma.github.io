import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "./styles.css";
import "./elements.css";

export default function Nav() {
    return (
        <nav>
            <Link to={"Hero"} className="navText">
                Hello
            </Link>
            <Link to={"services"} className="navText">
                Services
            </Link>
            <Link to={"work"} className="navText">
                Stories
            </Link>
            {/* <Link to={"clients"} className="navText">
                Clients
            </Link> */}
            <Link to={"about"} className="navText">
                About
            </Link>
            <Link to={"contact"} className="navText">
                Contact
            </Link>
        </nav>
    );
}
