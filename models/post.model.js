const mongoose =require( 'mongoose')
const PostSchema = new mongoose.Schema({
  post: {type: String},
  preview: {
    url:String,
    image:String,
    title:String
  },
  grouptitle:String,
  level:{type:Number,default:0},
  sentdown:{type:Boolean,default:false},
  groupIds:[{type: mongoose.Schema.ObjectId, ref: 'Group'}],
  notificationsent:{type:Boolean,default:false},
  politicalmarketing: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  likes: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  comments: [{type: mongoose.Schema.ObjectId, ref: 'Comment'}],
  createdby: {type: mongoose.Schema.ObjectId, ref: 'User'},
  timecreated: Number
})

module.exports=mongoose.model('Post', PostSchema)
