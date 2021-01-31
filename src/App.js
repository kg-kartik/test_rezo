import React, { useState } from "react";
import Axios from "axios";

const App = () => {
    const [song, setSong] = useState("");
    const [result, setResult] = useState("");

    const searchSong = (e) => {
        setSong(e.target.value);

        if (e.target.value.length > 0) {
            Axios.post("https://rezo-search.herokuapp.com/search", {
                query: e.target.value,
            }).then((response) => {
                console.log(response.data, "data");
                setResult(response.data.search_results);
            });
        }
    };

    return (
        <div>
            <input type="text" value={song} onChange={(e) => searchSong(e)} />
            {result && result.map((song) => <h1>{song}</h1>)}
        </div>
    );
};

export default App;
