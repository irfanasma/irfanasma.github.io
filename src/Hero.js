import React from "react";

import "./elements.css";

import LinkedInIcon from "./assets/linkedin.svg";
import InstagramIcon from "./assets/instagram.svg";
import TwitterIcon from "./assets/twitter.svg";
import MediumIcon from "./assets/medium.svg";

import Correction from "./Correction";

export default function Hero() {
    return (
        <section id="Hero">
            <div className="titleContainer">
                <div className="innerContainer">
                    <p className="b16 scrollText">Scroll Down</p>
                    <h1>
                        <Correction text="Im" color="#183150" />
                        Perfect <br /> Human.
                    </h1>
                </div>

                <div className="socials" style={{ marginLeft: "auto" }}>
                    <a
                        href="https://asmairfan2002.medium.com/"
                        target={"_blank"}
                    >
                        <img src={MediumIcon} alt="" />
                    </a>
                    <a
                        href="https://www.instagram.com/asmairfan234/"
                        target={"_blank"}
                    >
                        <img src={InstagramIcon} alt="" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/asmairfan234"
                        target={"_blank"}
                    >
                        <img src={LinkedInIcon} alt="" />
                    </a>
                    <a
                        href="https://twitter.com/irfanasma234"
                        target={"_blank"}
                    >
                        <img src={TwitterIcon} alt="" />
                    </a>
                </div>
            </div>
            <div className="subContainer">
                <h6>Content Writer • Psychologist • Researcher • Editor</h6>
            </div>
        </section>
    );
}
