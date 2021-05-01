import { response } from 'express';
import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";

function Artwork() {

    const [artWork, setArtWork] = useState({
        artwork: "",
        artist: ""
    })
    const [items, setItems] = useState([]);
    const [initialize, setInitialize] = useState(false);

    const uploadArt = () => {
        setItems(items.concat(response.data));
        setInitialize(true);
    }

    useEffect(() => {
        if (!initialize) {
            uploadArt();
        }
    })

    return (
        <div>
            <h1>Pictures of her Artwork</h1>
            <Footer />
        </div>
    )

}

export default Artwork;