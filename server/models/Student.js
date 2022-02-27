const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  firstName: {
    type: String,
    require: true,
    lowercase: true,
  },
  lastName: {
    type: String,
    require: true,
    lowercase: true,
  },
  semester: {
    type: Number,
    require: false,
  },
  advisorId: {
    type: Number,
    require: false,
  },
});

// The name of the collection
const Student = mongoose.model("student", studentSchema);

module.exports = Student;
