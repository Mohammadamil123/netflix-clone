import React, { useEffect, useState } from "react";
import requests from "./request";
import './Header.css';
const Header = () =>{

    let [header,setHeader] = useState('');

    useEffect(() =>{
            async function getHeaderdata(){
                const res = await fetch(`https://api.themoviedb.org/3${requests.fetchTrending}`);
                const req = await res.json();
                setHeader(req.results[Math.floor(Math.random() * req.results.length)]);      
            }
            getHeaderdata();


    },[]);
    return(
        <>
            <div className="header"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${header.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                    <div className="h_content">
                        <h1>{header.name || header.title || header.original_title}</h1>
                            <div>
                                <button className="btn">Play</button>
                                <button className="btn">My List</button>
                            </div>
                        <p>{header.overview && header.overview.length>150 ? header.overview.slice(0, 150)+'...' : header.overview}</p>
                    </div>
            </div>       
        </>
    )
}
export default Header;