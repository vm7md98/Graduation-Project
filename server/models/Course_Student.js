const mongoose = require("mongoose");

const course_studentSchema = new mongoose.Schema({
  code: {
    type: String,
    require: true,
  },
  id: [Number],
});

course_studentSchema.statics.studentNumber = async function () {
  /*   const a = await this.find();
  a.forEach((element) => console.log(element.id.length)); */
};
// The name of the collection
const CourseStudent = mongoose.model("course_student", course_studentSchema);

module.exports = CourseStudent;
