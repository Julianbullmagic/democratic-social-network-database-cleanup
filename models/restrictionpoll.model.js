const mongoose =require( 'mongoose')
const RestrictionPollSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  usertorestrict: {type: mongoose.Schema.ObjectId, ref: 'User'},
  explanation:{type: String},
  usertorestrictname: {type: String},
  local:{type:Boolean,default:false},
  groupId:{type: mongoose.Schema.ObjectId, ref: 'Group'},
  restriction: {type: String},
  approval: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  notificationsent:{type:Boolean,default:false},
  ratificationnotificationsent:{type:Boolean,default:false},
  duration:Number,
  comments: [{type: mongoose.Schema.ObjectId, ref: 'Comment'}],
  createdby: {type: mongoose.Schema.ObjectId, ref: 'User'},
  timecreated: Number
})

module.exports=mongoose.model('RestrictionPoll', RestrictionPollSchema)
