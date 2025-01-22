import React from "react";
import { useState } from "react";
import axios from "axios";

export const Comics = () => {
    const [item, setItems] = useState()
    const fetch = async () => {
        const res = await axios.get(`https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=d0137fa40d5132a1d5e0eb148caa0932&hash=b4b87f94c2284ac8230ef8908d164ee8`)
        setItems(res.data.data.results[0])
    }
    fetch();
    return (
        <>
            {
                (!item) ? "" : (
                    <div className="box-content">
                        <div>
                            <h1>Comics</h1>
                            <ul>
                                {item.comics.items.map(comic => (
                                    <li key={comic.name}>
                                        <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="comic image" />

                                        {comic.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )
            }
        </>
    )
}