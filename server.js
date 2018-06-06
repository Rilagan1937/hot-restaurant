//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//array of fake reservations
var reservations = [
   {
       name: "Spongebob",
       phoneNumber: "555-1234",
       email: "pineapple@bikinibottom.org",
       uniqueID: "SB-300"
   },
   {
       name: "Patrick",
       phoneNumber: "555-3000",
       email: "starfish@bikinibottom.org",
       uniqueID: "star-21"
   },{
       name: "Mr. Krabs",
       phoneNumber: "555-7000",
       email: "krabbypatty@bikinibottom.org",
       uniqueID: "krabs-200"
   },
]

// ==================================================
// ROUTES
// ==================================================

app.get("/", function(req, res) {
   res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
   res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/add", function(req, res) {
   res.sendFile(path.join(__dirname, "add-res.html"));
});

app.get("/api/tables", function(req, res) {
   return res.json(reservations);
});

app.post("/api/tables", function(req, res) {
   var newTable = req.body;

   console.log(newTable);

   reservations.push(newTable);

   res.json(newTable);
});

// Starts the server to begin listening
app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
});