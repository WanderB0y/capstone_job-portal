const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

const app = express();

app.use(express.static("public"));
app.use(expressLayouts);
app.set("layout", "./layouts/master");
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/about", function (req, res) {
  res.render("pages/about", {
    people: [
      {
        name: "Lee",
      },
      {
        name: "John",
      },
    ],
  });
});

app.get("/login", function (req, res) {
  res.render("pages/login", {
    layout: "./layouts/authentication",
  });
});

app.get("/blog", function (req, res) {
  res.render("pages/blog");
});

app.get("/employer", function (req, res) {
  res.render("pages/employer");
});

app.get("/listings", function (req, res) {
  res.render("pages/listings");
});

app.listen(3000);
console.log("Server is running");
