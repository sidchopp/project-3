var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Fuze = require('../models/FuzeSchema');

//ORIGINALLY 
/* GET users listing. */
//router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
//});

//module.exports = router;

// MODIFIED
//There are two routes below


router.get('/', async (req, res, next) => {
  let data = await Fuze.find({});
  console.info(`records retrieved from mongoose:`, data?.length)
  res.send(data);
});

/* Details of a given Fuze. */
router.get('/:date', function(req, res, next) {
  let date = req.params.name;
  if (! date) {
    res.status(400).send('Bad request - `date` missing')
  }
  res.send(date);
});

module.exports = router;
