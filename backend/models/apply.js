const mongoose = require("mongoose");

const applySchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    maxlength: 50,
  },
  number: {
    type: Number,
    required: true,
    maxlength: 10,
  },
  message: {
    type: String,
    required: true,
    maxlength: 500,
  },
});


const Apply = mongoose.model("Apply", applySchema);

module.exports = Apply;
