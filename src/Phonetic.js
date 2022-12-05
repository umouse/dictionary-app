import "./Phonetic.css";
import React from "react";


export default function Phonetic(props){
    return (
        <div className="Phonetic mb-3">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer" >
                Listen
            </a>
            <br />
            <span className="text mt-3">{props.phonetic.text}</span>
        </div>
    );
}