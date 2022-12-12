import React, { useEffect, useState } from 'react'
import axios from "../../services/axios"
export default function TilesRow({ title, requestUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getMovies() {
            const request = await axios.get(requestUrl);
            console.log("request: ", request.data.results);
            console.log("reques2t: ", requestUrl);
        };

        getMovies();
    }, [movies]);

    return (
        <div>{title}</div>
    )
}
