import React from "react";
import "./style.css";

function ImageContainer(props) {
    return (
        <div className="img-container shake">
            <img alt={props.name} src={props.image}
            onClick={() => props.scoreCounter(props.name)} />
        </div>
    );
}

export default ImageContainer;  