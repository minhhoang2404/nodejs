const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const course = new Schema({
    name: {style:String},
    des: {style:String},
    createAT : {type:Date, default:Date.now},
    updatedAT : {type:Date, default:Date.now}
  });

  module.exports = mongoose.model('course', course);
