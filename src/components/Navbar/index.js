import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <div className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div>{props.children}</div>
            <a className="navbar-brand" href="/">Home</a>
            <ul className="navbar-nav">
                <li className="nav-item" id="message">{props.message}</li>
                <li className="nav-item" id="score">Your Score: {props.score}</li> |
                <li className="nav-item" id="top-score">Top Score: {props.topScore}</li>
            </ul>
        </div>
    );
}

export default Navbar;  