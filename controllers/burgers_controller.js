// import express and burger.js
const express = require(`express`);
const app = express();

//upon loading the landing page, all burgers are selected and rendered from the database
app.get("/", function (req, res) {
    connection.query("SELECT * FROM burgers;", function (err, data) {
        if (err) throw err;
        res.render("index", { burgers: data });
    });

})

//if data is posted then it is added as a burger entry and then the page redirects to the start
app.post("/", function (req, res) {
    connection.query("INSERT INTO burgers (burger) VALUES (?)", [req.body.burger], function (err, result) {
        if (err) throw err;
        res.redirect("/");
    });
});

// Start the server
app.listen(PORT, function () {
    console.log("Server listening on" + PORT);
});

//export router

