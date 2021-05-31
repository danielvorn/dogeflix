import React, {useEffect, useState} from 'react';
import axios from '../axios';
import '../styles/Row.css';

const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({title, fetchUrl, isLargeRow}) {
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

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="rowPosters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className={`rowPoster ${isLargeRow && "rowPosterLarge"}`}
                        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}/>))}
            </div>
        </div>
    )
}

export default Row;