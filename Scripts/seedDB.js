const mongoose = require("mongoose");
const db = require("../Models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/artDB"
);

const artSeed = [
    {
        title: "Watercolor Print",
        artist: "",
        category: "Print",
        image: "./images/Painting1"
    },
    {
        title: "Black and White Print",
        artist: "",
        category: "Print",
        image: "./images/Painting2"
    },
    {
        title: "1800s Print",
        artist: "",
        category: "Print",
        image: "./images/Painting3"
    },
    {
        title: "Glass Sculpture",
        artist: "",
        category: "Glass Art",
        image: "./images/GlassArt"
    },
    {
        title: "",
        artist: "",
        category: "",
        image: ""
    },
    {
        title: "",
        artist: "",
        category: "",
        image: ""
    },
];

db.Art
    .remove({}).then(() => db.Art.collection.insertMany(artSeed))
    .then(data => {
        console.log(data.result.n + "records inserted");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

module.exports = artSeed;