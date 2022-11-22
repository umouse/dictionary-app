import React, {useState} from "react";

export default function Dictonary() {
    let [word, setWord]=useState('')

    function search(event){
        event.preventDefault()
        alert(`Searching for ${word} meaning`)
    }
    function handleWordChange(event){
        setWord(event.target.value);

    }

    return(
        <div className="dictionary">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleWordChange}></input>
            </form>
        </div>
    );
}
