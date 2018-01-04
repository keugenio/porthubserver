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
    res.json("sucess");
  })
})

module.exports = router;