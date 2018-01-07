// import { escape } from "querystring";

var db = require("../models");
const express = require('express');
const router = express.Router();

router.get('/templates/:login', (req, res) => {
  db.User.find({login:req.params.login}, {template:1})
  .populate('template')
  .sort({_id: -1})
  .then((data) => {
    console.log(data);
    res.json(data);
  })
})

router.get('/user/:login', (req, res) =>{
  db.User.find({login:req.params.login})
  .then((data) =>{
    res.json(data);
  })
})

// convert pdf from html passed
router.get('/retrievePDF/:templateID', ((req, res) => {
  const fs = require('fs');     
  const pdf = require('html-pdf');
  let html = '';

  db.Template.find({_id:req.params.templateID})
  .then((response) =>{
    console.log("html? ", response[0].html);
    res.send(response[0].html);
    // html = response.data.html;
  })
  
  const options = { "format": "Letter","border": {"top": "0","bottom":"0","left": "0","right":"0"},}; 
  
  // pdf.create("boob", options).toStream(function(err, stream){
  //   stream.pipe(res);
  // });

}));

// test to just send pdf to client
router.get('/retrieveResume/:login/:template', ((req, res) => {
  const fs = require('fs');     

  res.sendFile(__dirname + "/resume.pdf", (err) =>{
    err ? console.log(err) : console.log("file sent");
  });
}));

module.exports = router;