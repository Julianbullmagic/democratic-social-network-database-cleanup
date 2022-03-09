const mongoose =require( 'mongoose')
const RestrictionSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  usertorestrict: {type: mongoose.Schema.ObjectId, ref: 'User'},
  explanation:{type: String},
  restriction: {type: String},
  local:{type:Boolean,default:false},
  associatedpoll:{type: mongoose.Schema.ObjectId, ref: 'RestrictionPoll'},
  groupId:{type: mongoose.Schema.ObjectId, ref: 'Group'},
  notificationsent:{type:Boolean,default:false},
  ratificationnotificationsent:{type:Boolean,default:false},
  duration:Number,
  createdby:{type: mongoose.Schema.ObjectId, ref: 'User'},
  timecreated: Number
})

module.exports=mongoose.model('Restriction', RestrictionSchema)
