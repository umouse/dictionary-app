import React, {useState} from "react";
import axios from "axios";

export default function Dictonary() {
    let [word, setWord]=useState('')

    function search(event){
        event.preventDefault()
        alert(`Searching for ${word} meaning`)

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        axios.get(apiUrl).then(handleResponse)
    }
    function handleWordChange(event){
        setWord(event.target.value);
    }
    function handleResponse(response){
        console.log(response.data[0])

    }

    return(
        <div className="dictionary">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleWordChange}></input>
            </form>
        </div>
    );
}
