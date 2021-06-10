import React, { useState } from 'react';
import Footer from "../components/Footer";
import "./Categories.css";

function Categories() {

    const [art, setArt] = useState({
        posts: "",
        categories: ""
    });


    return (
        <div>
            <h1>Artwork Categories</h1>
            <br />
            <h3 className="category">All of her art is Separated into these different categories</h3>
            <Footer />
        </div>
    )
}

export default Categories;