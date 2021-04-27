require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./Routes");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const findOrCreate = require("mongoose-findorcreate");
const passportLocalMongoose = require("passport-local-mongoose");
const Art = require('./Models/art');
const app = express();

app.use(cors());
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("Client/build"));
}

app.use(routes);

app.use(session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/artDB", { useNewUrlParser: true, useUnifiedTopology: true });

// Art.plugin(passportLocalMongoose);
// Art.plugin(findOrCreate);

app.listen(PORT, function () {
    console.log(PORT);
    console.log(`API Server now listening on http://localhost/${PORT}`);
});