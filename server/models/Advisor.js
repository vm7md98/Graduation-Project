const mongoose = require("mongoose");

const advisorSchema = new mongoose.Schema({
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
  },
});



// The name of the collection
const Advisor = mongoose.model("advisor", advisorSchema);

module.exports = Advisor;
