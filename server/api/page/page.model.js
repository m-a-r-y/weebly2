'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PageSchema = new Schema({
  title: String,
  body: String,
  user_id: Schema.Types.ObjectId
});

module.exports = mongoose.model('Page', PageSchema);
