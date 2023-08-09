const express = require("express");
const milestoneInformation = require("./public/assets/js/milestone-data");
const app = express();

// set  the view engine to ejs, and using 
// express.static to run all of the files within the directory of public 
// with this tailwind won't work

app.use(express.static("public"));
app.set("view engine", "ejs");


// Setting home as a home page

app.get('/', function(req, rest){
  rest.render('pages/home');
});


// About Page

app.get('/about', function(req, res){



res.render('pages/about', {

  /* Milestone Data */
    milestoneInformation: milestoneInformation
  });
});
// Trabaho Page

app.get('/trabaho', function(req, res){
  res.render('pages/trabaho')
});

// Blog Page

app.get('/blog', function(req, res){
  res.render('pages/blog')
});

// Employer Page

app.get('/employer', function(req, res){
  res.render('pages/employer')
});

// Server port

app.listen(3000);
console.log("Server is running");
