// CORE REQUIREMENTS
const express = require(`express`);
// const exphbs = require(`express-handlebars`);
// const mysql = require(`mysql`);
const app = express();
// const PORT = process.env.PORT || 8080;


//CONFIGS & IMPORTS
//Accepts the connection config export
const connection = require(`config/connection.js`)
//establishes the connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//Configuring Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setting up Handlesbars 
const exphbs = require(`express-handlebars`);
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

