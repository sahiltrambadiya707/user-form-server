const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    mobileNumber: { type: Number },
    country: { type: String },
    state: { type: String },
    city: { type: String },
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.models.user || mongoose.model("user", modelSchema);
module.exports = User;
