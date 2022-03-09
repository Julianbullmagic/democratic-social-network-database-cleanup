const mongoose = require('mongoose');


const ruleSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  rule: {
    type: String,
    required: true
  },
  local:{type:Boolean,default:false},
  level:Number,
  grouptitle:String,
  groupIds:[{type: mongoose.Schema.ObjectId, ref: 'Group'}],
  sentdown:{type:Boolean,default:false},
  createdby:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
  explanation:String,
  approval: [{type:mongoose.Schema.Types.ObjectId,ref:"User"}],
  notificationsent:{type:Boolean,default:false},
  ratificationnotificationsent:{type:Boolean,default:false},
  timecreated:Number
})

module.exports =  mongoose.model('Rule', ruleSchema)
