import "./Synonyms.css"
import React  from "react";


export default function Synonyms(props){
    if(props.synonyms.length > 0) {
        return(
            <div className="Synonyms">
                <strong>Synonyms: </strong>
                {props.synonyms.map(function(synonym, index) {
                    return <p key={index}>{synonym};</p>;
                })}
            </div>
        );
    }else{
        return null;
    }
}

