const mongoose = require("mongoose");

const skiSchema = new mongoose.Schema(
  {
    make: {
      type: String,
      required: true,
      trim: true,
    },
    model: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    radius: {
      type: Number,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    level: {
      type: String,
      required: true,
      trim: true,
    },
    condition: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    collection: "skis",
  }
);

module.exports = mongoose.model("Ski", skiSchema);
