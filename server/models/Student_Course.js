const mongoose = require("mongoose");

const student_courseSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true,
  },
  code: [String],
});

// The name of the collection
const StudentCourse = mongoose.model("student_course", student_courseSchema);

module.exports = StudentCourse;
