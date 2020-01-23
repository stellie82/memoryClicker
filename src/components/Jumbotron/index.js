import React from "react";
import "./style.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron">
            <h1><b>Space Memory</b></h1>
            <p>Click on an image to begin, but try not to click on any one more than once!</p>
        </div>
    );
}

export default Jumbotron;