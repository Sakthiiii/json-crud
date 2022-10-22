const mongoose = require("mongoose");

const infoSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  age: {
    type: Number,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  pancard: {
    type: String,
    require: true,
  },
  register: {
    type: Number,
    require: true,
  },

  createTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("info", infoSchema);
