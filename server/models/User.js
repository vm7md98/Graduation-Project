const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
autoIncrement = require("mongoose-auto-increment");

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please enter an email "],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email "],
    description: "must be a valid email",
  },
  password: {
    type: String,
    required: [true, "Please enter an password "],
    minlength: [6, "Minimum password length is 6 character "],
    description: "must be at least 6",
  },
  role: {
    type: String,
    required: true,
    enum: ["AD", "AV", "ST"],
    description: "can only be one of the enum values",
  },
});

//static method to login use
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const passCompare = await bcrypt.compare(password, user.password);
    if (passCompare) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, {
  model: "user",
  field: "id",
  startAt: 1,
});

//fire a function after doc saved to db
userSchema.post("save", (doc, next) => {
  let alert = require("alert");
  alert("Saved in database");
  next();
});

//fire a function before doc saved to db / we used it for hash the password
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// The name of the collection
const User = mongoose.model("user", userSchema);

/**
 * Export User schema
 */
module.exports = User;
