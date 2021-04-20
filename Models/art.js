const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArtSchema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true }
});

const Art = mongoose.model("Art", ArtSchema);

module.exports = Art;