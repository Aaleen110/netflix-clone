import axios from '../../services/axios';
import React, { useEffect, useState } from 'react'
import requests from '../../services/requests';
import './cover.css';
function Cover() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchCoverMovie() {
            const response = await axios.get(requests.fetchTrending);
            let ind = Math.floor(Math.random() * response.data.results.length);
            setMovie(response.data.results[ind])
        };

        fetchCoverMovie();
    }, [requests.fetchTrending]);

    return (
        <div style={{  zIndex: 1, position:'relative' }}>
           
            <div
                className='cover-main'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                    backgroundPosition: "center center"
                }}
            >
                <div className='cover-contents'>
                    <h1 className='movie-title'>{movie.title || movie.name || movie.original_name}</h1>
                    <h3 className='movie-overview'>{movie.overview?.length > 200 ? movie.overview.substring(0, 200) + '...' : movie.overview}</h3>

                    <div style={{ paddingTop: 8 }}>
                        <button className='btn-play'><i className="fa fa-play" ></i> Play</button>

                        <button className='btn-more'><i className="fa fa-info-circle" ></i> More Info</button>
                    </div>
                </div>
            </div>
            {/* for faded cover effect */}
            <div className='faded-bottom'></div>

        </div>
    )
}

export default Cover;
