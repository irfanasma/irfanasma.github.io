import React from "react";

import "./elements.css";

export default function WorkTemplate(props) {
    return (
        <a
            href={props.URL}
            target="_blank"
            className={`workTemplate ${props.dark ? "darkTemp" : " "}`}
            style={{
                backgroundImage: `url(${props.bgImage})`,
                color: props.dark
                    ? "rgba(255, 255, 255, 8)"
                    : "rgba(24, 49, 80, 8)",
                boxShadow: props.dark
                    ? "inset 0 0 0 1000px rgba(0, 0, 0, 0.7)"
                    : "inset 0 0 0 1000px rgba(255, 255, 255, 0.7)",
            }}
        >
            <p className="b20">{props.date}</p>
            <h3
                style={{
                    color: props.dark ? "white" : "rgba(24, 49, 80, 1)",
                    fontSize: props.fontsize ? props.fontsize : "",
                }}
            >
                {props.title}
            </h3>
            <div className="bottomLine row">
                <div className="row" style={{ gap: 16, alignItems: "center" }}>
                    <p
                        className="tag b20"
                        style={{
                            backgroundColor: props.dark ? "#DEDEDE" : "#183150",
                            color: props.dark ? "#1D1B1A" : "#fff",
                        }}
                    >
                        {props.tag}
                    </p>
                    <p className="b20 readtime">{props.readTime}</p>
                </div>
                <p className="b20">{props.source}</p>
            </div>
        </a>
    );
}
