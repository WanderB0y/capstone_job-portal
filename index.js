const express = require("express");
const app = express();

/* Data path import */

const milestoneInformation = require("./public/assets/js/milestone-data");
const testimonyInformation = require("./public/assets/js/testimony-data");
const trustedInformation = require("./public/assets/js/trusted-data");
const blogInformation = require("./public/assets/js/blog-data");
const popularInformation = require("./public/assets/js/popular-listing-data");
const newInformation = require("./public/assets/js/new-listing-data");
const jobInformation = require("./public/assets/js/job-data");
const articleInformation = require("./public/assets/js/article-data");
const poparticleInformation = require("./public/assets/js/popular-article-data");
const whyInformation = require("./public/assets/js/why-data");
const emptestimonyInformation = require("./public/assets/js/employer-testimony-data");


// set  the view engine to ejs, and using 
// express.static to run all of the files within the directory of public 
// with this tailwind won't work

app.use(express.static("public"));
app.set("view engine", "ejs");


// Setting home as a home page

app.get('/', function(req, rest){
  rest.render('pages/home', {

    /* Popular Information */
    popularInformation: popularInformation,

    /* New Information */
    newInformation: newInformation,

    /* Blog Data */ 
    blogInformation: blogInformation
    
  });
});

// About Page

app.get('/about', function(req, res){
res.render('pages/about', {

  /* Milestone Data */
    milestoneInformation: milestoneInformation,

    /* Testimony Data */
    testimonyInformation: testimonyInformation,

    /* Trusted Data */
    trustedInformation: trustedInformation,

    /* Blog Data */
    blogInformation: blogInformation

  });
});




// Trabaho Page

app.get('/trabaho', function(req, res){
  res.render('pages/trabaho', {

        /* Blog Data */ 
        blogInformation: blogInformation,

        /* Job Data */
        jobInformation: jobInformation
  })
});




// Blog Page

app.get('/blog', function(req, res){
  res.render('pages/blog', {

    /* Article data */
    articleInformation: articleInformation,

    /* Popular Article Information */
    poparticleInformation: poparticleInformation
    
  })
});



// Employer Page

app.get('/employer', function(req, res){
  res.render('pages/employer', {

      /* Blog Data */ 
      blogInformation: blogInformation,

      /* Trusted Data */
    trustedInformation: trustedInformation,

    /* Why Data */
    whyInformation: whyInformation,

    /* Employer Testimony Data */
    emptestimonyInformation: emptestimonyInformation
  })
});

 // Log In Page 

 app.get('/login', function(rec, res){
  res.render('pages/login')
 })


 app.get('/register', function(rec, res){
  res.render('pages/register')
 }) 
// Server port

app.listen(3000);
console.log("Server is running");
