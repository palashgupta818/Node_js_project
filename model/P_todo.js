const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const p_todo = new Schema({
    title:String,
    description:String,
    username:String
  })
const Todo = mongoose.model('p_todo',p_todo);
module.exports = Todo;

