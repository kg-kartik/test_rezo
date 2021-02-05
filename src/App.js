import React, { useState } from "react";
import Axios from "axios";

const App = () => {
    const [song, setSong] = useState("");
    const [result, setResult] = useState("");

    const api_url = process.env.REACT_APP_API_URL;

    const searchSong = (e) => {
        setSong(e.target.value);

        if (e.target.value.length > 0) {
            Axios.post(`${api_url}/search`, {
                query: e.target.value,
            }).then((response) => {
                console.log(response.data, "data");
                setResult(response.data);
            });
        }
    };

    return (
        <div>
            <input type="text" value={song} onChange={(e) => searchSong(e)} />
            {result &&
                result.map((song, i) => <h1 key={i}>{song.track_name}</h1>)}
        </div>
    );
};

export default App;
