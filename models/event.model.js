const mongoose = require('mongoose');


const eventSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title:String,
  description:String,
  groupIds:[{type:mongoose.Schema.Types.ObjectId,ref:"Group"}],
  local:{type:Boolean,default:false},
  sentdown:{type:Boolean,default:false},
  grouptitle:String,
  location:String,
  images:[{type:String}],
  coordinates:[Number],
  level:Number,
  notificationsent:{type:Boolean,default:false},
  approvalnotificationsent:{type:Boolean,default:false},
  createdby:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
  approval: [{type:mongoose.Schema.Types.ObjectId,ref:"User"}],
  timecreated:Number
})

module.exports =  mongoose.model('Event', eventSchema)
