import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const Marvel = () => {
    const { id } = useParams();
    const [item, setItems] = useState()
    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=d0137fa40d5132a1d5e0eb148caa0932&hash=b4b87f94c2284ac8230ef8908d164ee8`)
            setItems(res.data.data.results[0])
        }
        fetch();
    },)
    return (
        <>
            {
                (!item) ? "" : (
                    <div className="box-content">
                        <div className="right-box">
                        </div>
                        <div className="left-box">
                            <h1>{item.name}</h1>
                            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="hero image" />
                            <h4>{item.description}</h4>
                            <h1>Comics</h1>
                            <ul>
                                {item.comics.items.map(comic => (
                                    <li key={comic.name}>{comic.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Marvel;