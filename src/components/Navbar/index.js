import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar sticky-top navbar-light bg-light nav-justified">
            <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
                <p className="nav-link" id="message"><b>{props.message}</b></p>
            </li>
            <li className="nav-item">
                <p className="nav-link" id="score">Your Score: {props.score}</p>
                <p className="nav-link disabled" id="top-score">Top Score: {props.topScore}</p>
            </li>
        </nav>
    );
}

export default Navbar;  