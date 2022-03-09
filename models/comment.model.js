const mongoose =require( 'mongoose')
const commentSchema = new mongoose.Schema({
  comment: {type: String},
  postid:{type: mongoose.Schema.ObjectId, ref: 'Post'},
  createdby: {type: mongoose.Schema.ObjectId, ref: 'User'},
  timecreated: Number
})

module.exports=mongoose.model('Comment', commentSchema)
