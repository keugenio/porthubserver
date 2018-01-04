var db = require("../models");
const express = require('express');
const router = express.Router();

router.get('/templates/:login', (req, res) => {
  db.User.find({login:req.params.login})
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
    console.log(data);
    res.json(data);
  })
})

router.get('/bob', (req,res) =>{
  res.send("bob");
})

module.exports = router;