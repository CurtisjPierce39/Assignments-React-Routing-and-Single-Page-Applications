import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Card } from "./CharacterList";

export const Comics = () => {
    const [url, setUrl] = useState("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=d0137fa40d5132a1d5e0eb148caa0932&hash=b4b87f94c2284ac8230ef8908d164ee8")
    const [item, setItems] = useState();

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(url)
            setItems(res.data.data.results)
        }
        fetch();
    }, [url])
    return (
        <>
            {
                (!item) ? "" : (
                    <div>
                        <h1>Comics</h1>
                        <div className="content">
                            {
                                (!item) ? <p>Not Found</p> : <Card data={item} />
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Comics;