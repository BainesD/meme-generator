import React from "react";
import trollFace from "../images/TrollFace.png";

export default function NavBar(){

    return(
        <>
        <div className="navbar">
            <div className="brand">
            <img className="troll-face" src={trollFace}/>
            <h1>Meme Generator</h1>
            </div>
            <div className="banner">
                <h3>React Course - Project 3</h3>
            </div>

        </div>
        </>
    )
}