import React, { useEffect, useState } from "react";
import './Row.css'

const baseurl = "https://image.tmdb.org/t/p/original/";

const Row = ({title, isBigPoster ,fetchUrl})=>{

    const [movies,setMovies] = useState([]);

    useEffect(() =>{
        async function netflix() {
            const res = await fetch(`https://api.themoviedb.org/3${fetchUrl}`);
            const request = await res.json();
            setMovies(request.results);
        }
        netflix();
    },[fetchUrl]);

      
    return(
        <>  
            <h2>{title}</h2>
            <div className="posters_row">
                {
                    movies.map((movie) => {
                        return (
                            <img src={`${baseurl}${isBigPoster ? movie.poster_path : movie.backdrop_path}`} className={`poster_img ${isBigPoster ? 'big_images' : ''}`} alt={movie.title} key={movie.id} />
                        )
                    })
                }
            </div>
        </>
    )
}
export default Row;