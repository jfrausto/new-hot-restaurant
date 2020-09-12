const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// create array variables

const tables = [
  {
    name: "jesse",
    phoneNum: 323323323,
    email: "jesse@jesse.com",
    id: 777,
  },
];

const waitList = [];
// array of objects with:
// name, phone number, email, unique id

// ROUTES ----------------------------------

// calling our home root home.html
app.get("/", function (req, res) {
  console.log("I made it here!");
  res.sendFile(path.join(__dirname, "home.html"));
});
// tables route
app.get("/tables", function (req, res) {
  console.log("I made it here!");

  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
  console.log("I made it here!");

  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function (req, res) {
  console.log("I made it here!");
  return res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
  console.log("I made it here!");
  return res.json(waitList);
});

// create server
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
