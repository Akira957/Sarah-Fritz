const mongoose = require("mongoose");
const db = require("../Models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/artDB"
);

const artSeed = [
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