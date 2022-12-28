const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ["Food", "Shelter", "Job"],
      required: true,
    },
    title: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 5,
    },
    description: {
      type: String,
      maxlength: 255,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
