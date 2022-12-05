import "./Phonetic.css";
import React from "react";


export default function Phonetic(props){
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer" >
                Listen
            </a>
            
            <h2>{props.phonetic.text}</h2>
        </div>
    );
}