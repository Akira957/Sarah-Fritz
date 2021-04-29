import React, { useState } from 'react';
import Footer from "../components/Footer";

function Artwork() {

    const [artWork, setArtWork] = useState({
        artwork: "",
        artist: ""
    })

    return (
        <div>
            <h1>Pictures of her Artwork</h1>
            <Footer />
        </div>
    )

}

export default Artwork;