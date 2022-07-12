const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const p_user = new Schema({
    name:String,
    email:String,
    phone:Number,
    password:String
  });
const User = mongoose.model('p_user',p_user);
module.exports = User;

