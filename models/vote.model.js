const mongoose = require('mongoose');


const voteSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  for:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
  by:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
  group:{type:mongoose.Schema.Types.ObjectId,ref:"Group"},
  coordinates:[Number],
  timecreated:Number
})

module.exports =  mongoose.model('Vote', voteSchema)
