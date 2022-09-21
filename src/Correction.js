import React from "react";

export default function Correction(props) {
    return (
        <span className="correction outer">
            <span className="correction inner" style={{ color: props.color }}>
                {props.text}
            </span>

            <div className="correctText" style={props.style}>
                {props.correct}
            </div>
        </span>
    );
}
