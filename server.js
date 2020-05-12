// BOILER PLATE
const express = require(`express`);
const exphbs = require(`express-handlebars`);
const mysql = require(`mysql`);
const app = express();
const PORT = process.env.PORT || 8080;

//Accepts the import from other files
const connection = require(`config/connection.js`)

//Configuring express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//configuring express and handlebars default behavior
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

