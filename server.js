const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");
const config = require("./config/db") //./ means start in the same directory
const controller = require("./controllers/burgers_controller")

const app = express();
const PORT = process.env.PORT || 8089;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up handlebars default behavior
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// const connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "password",
//   database: "burgers_db"
// });

const connection = mysql.createConnection(config.local);

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//ROUTES
app.get("/", async function(req, res) {
    const data = await controller.listAll(connection);
    console.log(data)
    res.render("index", { burgers: data });
});

  app.post("/", function(req, res) {
  
    connection.query("INSERT INTO burgers (burger) VALUES (?)", [req.body.burger], function(err, result) {
      if (err) {
        throw err;
      }
  
      res.redirect("/");
    });
  });

// app.post("/DELETE/:id", function (req, res) {
//     connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function (err, result) {
//         if (err) throw err;
//         res.redirect("/");
//     });
// });

// app.post("/EAT/:id", function (req, res) {
//     connection.query("UPDATE burgers SET eaten = NOT eaten WHERE id = ?", [req.params.id], function (err, result) {
//         if (err) throw err;
//         res.redirect("/");
//     });
// });

//SERVER START
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });

