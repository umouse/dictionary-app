import "./Synonyms.css"
import React  from "react";


export default function Synonyms(props){
    if(props.synonyms){
        return(
            <ul className="Synonyms">
                {props.synonyms.map(function(synonym, index) {
                    return <p className="btn-primary" key={index}>{synonym}</p>;
                })}
            </ul>
        );
    }else{
        return null;
    }
}

