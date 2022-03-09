const mongoose =require( 'mongoose')
const SuggestionSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  suggestion: {type: String},
  pollid:{type: mongoose.Schema.ObjectId, ref: 'Poll'},
  approval: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  createdby: {type: mongoose.Schema.ObjectId, ref: 'User'},
  timecreated: Number
})
module.exports=mongoose.model('Suggestion', SuggestionSchema)
