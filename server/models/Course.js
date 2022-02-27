const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    require: true,
    lowercase: true,
  },
  code: {
    type: String,
    require: true,
    uppercase: true,
    unique: true,
  },
  semester: {
    type: Number,
    required: false,
  },
  id: [Number],
  require: false,
});

// The name of the collection
const Course = mongoose.model("course", courseSchema);

module.exports = Course;
