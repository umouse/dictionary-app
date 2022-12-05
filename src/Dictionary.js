import"./Dictionary.css"
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
        <div className="Dictionary mt-3">
            <section>
                <h1>What word definition do you want to know?</h1>
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleWordChange}></input>
            </form>
            <div className="hint">suggested worlds: war, Ukraine, support, donate, help </div>
            </section>
            < Results  results={results}/>
            
        </div>
    );
}
