import React, {useEffect, useState} from 'react';
import axios from './axios';

const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        // if no brackets, run once when row loads and don't run again
        // if [movies], run once per page load or per movie change
        // if [], just run on page load

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl])

    console.table(movies);

    return (
        <div>
            <h2>{title}</h2>
            <div className="rowPosters">
                {movies.map(movie => (
                    <img
                        className="rowPoster"
                        src={`${baseUrl}${movie.poster_path}`}
                        alt={movie.name}/>))}
            </div>
        </div>
    )
}

export default Row;