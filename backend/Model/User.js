const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      minLength: 2,
      maxlength: 25,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      minLength: 2,
      maxlength: 25,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      minLength: 2,
      maxlength: 25,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      maxlength: 255,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
      lowercase: true,
    },
    passwordChangedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
