import"./Dictionary.css"
import React, {useState} from "react";
import Results from './Results';
import Photos from './Photos';
import axios from "axios";

export default function Dictonary() {
    let [word, setWord]=useState('');
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
    }

    function search(event){
        event.preventDefault()
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
        let pexelsKey = "563492ad6f9170000100000177e3aa7f30144b9e84a249afc888efd4";
       
        let headers = {"Authorization": `Bearer ${pexelsKey}`};
        axios.get(pexelsUrl, { headers:headers }).then(handlePexelsResponse);
        
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
                <input type="search" autoFocus={true} placeholder="Search for the word and click 'Enter' then... " onChange={handleWordChange}></input>
            </form>
            <div className="hint">suggested worlds: war, Ukraine, support, donate, help </div>
            </section>
            < Results results={results}/>
            < Photos photos={photos} />
            
        </div>
    );
}
