const mongoose = require("mongoose");

const verifyCodeSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  code: {
    type: String,
    require: true,
  },
  createdAt: { type: Date, expires: "5m", default: Date.now },
});

// The name of the collection
const VerifyCode = mongoose.model("VerifyCode", verifyCodeSchema);

module.exports = VerifyCode;
