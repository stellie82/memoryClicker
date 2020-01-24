import React from "react";
import "./style.css";

function SpaceContainer(props) {
    return (
        <div className={props.cssShake} id="main-container">{props.children}</div>
    );
}

export default SpaceContainer;  