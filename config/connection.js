const mysql = require(`mysql`);
//Creating a connection with the database
const PORT = process.env.PORT || 8080;
const connection = mysql.createConnection({
  host: "localhost",
  // port: 3306,
  port: PORT,
  user: "root",
  password: "NewPassword",
  database: "burgers_db"
});

  //Exports the connection settings
  module.exports.connection = connection;
