import React, {useState} from "react";
import Results from './Results';
import axios from "axios";

export default function Dictonary() {
    let [word, setWord]=useState('');
    let [results, setResults] = useState(null);

    function search(event){
        event.preventDefault()
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        axios.get(apiUrl).then(handleResponse)
    }
    function handleWordChange(event){
        setWord(event.target.value);
    }
    function handleResponse(response){
       setResults(response.data[0])

    }

    return(
        <div className="dictionary">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleWordChange}></input>
            </form>
            < Results  results={results}/>
        </div>
    );
}
