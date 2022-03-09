const mongoose =require( 'mongoose')
const crypto =require( 'crypto')
var random = require('mongoose-simple-random');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  email: {
    type: String,
    trim: true,
    unique: 'Email already exists',
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    required: 'Email is required'
  },
  cool:{type:Boolean,default:true},
  newmembers:{type:Boolean,default:false},
  groupstheybelongto:[{type: mongoose.Schema.ObjectId, ref: 'Group'}],
  location:String,
  coordinates:[Number],
  unreadmessages:{type:Number,default:0},
  votes:[String],
  recentprivatemessages: [{type: mongoose.Schema.ObjectId, ref: 'Chat'}],
  phone:Number,
  sex:{
    type:String,
    default:true
  },
  active:{
    type:Boolean,
    default: true
  },
  signins:[Number],
  expertise:String,
  rates:String,
  hashed_password: {
    type: String,
    required: "Password is required"
  },
  salt: String,
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
  about: {
    type: String,
    trim: true
  },
  photo: {
    data: Buffer,
    contentType: String
  },
  restrictions: [{type: mongoose.Schema.ObjectId, ref: 'Restriction'}],
  role : {
      type:Number,
      default: 0
  },
  images: [String],
  token : {
      type: String,
  },
  tokenExp :{
      type: Number
  },
  events:{
    type: Boolean,
    default: false
  },
  leaders:{
    type: Boolean,
    default: true
  },
  posts:{
    type: Boolean,
    default: false
  },
  polls:{
    type: Boolean,
    default: false
  },
  rules:{
    type: Boolean,
    default: true
  },
  purchases:{
    type: Boolean,
    default: false
  },
  restriction:{
    type: Boolean,
    default: true
  },
  rulesapproved:{
    type: Boolean,
    default: true
  },
  eventsapproved:{
    type: Boolean,
    default: true
  },
  restrictionsapproved:{
    type: Boolean,
    default: true
  },
})

userSchema.plugin(random)

userSchema
  .virtual('password')
  .set(function(password) {
    this._password = password
    this.salt = this.makeSalt()
    this.hashed_password = this.encryptPassword(password)
  })
  .get(function() {
    return this._password
  })

userSchema.path('hashed_password').validate(function(v) {
  if (this._password && this._password.length < 6) {
    this.invalidate('password', 'Password must be at least 6 characters.')
  }
  if (this.isNew && !this._password) {
    this.invalidate('password', 'Password is required')
  }
}, null)

userSchema.methods = {
  updatePassword:function(passw){
    this.hashed_password = this.encryptPassword(passw)
  },
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password
  },
  encryptPassword: function(password) {
    if (!password) return ''
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex')
    } catch (err) {
      return ''
    }
  },
  makeSalt: function() {
    return Math.round((new Date().valueOf() * Math.random())) + ''
  }
}
module.exports = mongoose.model('User', userSchema);
