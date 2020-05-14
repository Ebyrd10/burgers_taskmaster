//CONFIGS & IMPORTS
//Accepts the connection config file
// const connection = require(`/config.connection.js`)
// const connection = import(`/config.connection.js`)
const mysql = require(`mysql`);
//Creating a connection with the database
// const PORT = process.env.PORT || 8080;
// const connection = mysql.createConnection({
//   host: "localhost",
//   // port: 3306,
//   port: 8080,
//   user: "root",
//   password: "NewPassword",
//   database: "burgers_db"
// });
// //establishes the connection
// connection.connect(function (err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// });

const connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "NewPassword",
    database: "burgers_db"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });



//Configuring Express
const express = require(`express`);
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Configuring Handlesbars 
const exphbs = require(`express-handlebars`);
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//functions for interacting with the database
// `selectAll()`
//  `insertOne()`
// `updateOne()`

