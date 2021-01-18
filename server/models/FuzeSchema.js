const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fuzeSchema = new mongoose.Schema({
  date: Date,
  startTime: String,
  endTime:String,
  title:String,
  description: String,
  venue:String,
  type:String,
  tags1:String,
  tags2:String,
  tags3:String,
  organizer:String,
  whereIFoundThisEvent1:String,
  whereIFoundThisEvent2:String,
  whereIFoundThisEvent3:String,

});

// first argument is the singular name of the collection your model is 4. 
//Mongoose automat looks for plural,lowercased version of your model name. 
//Thus, the model Fuse is for the fuses collection in the database.
module.exports = mongoose.model('Fuse', fuzeSchema, 'Sandbox');