const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      // neleidziam susikurti dvieju useriu su tais paciais el pašto adresu
      unique: true,
      // vistada isaugom email mazosiom raidem
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      // galimi varjantai
      enum: ["user", "admin"],
      // automatiskai sukuria userio role
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

// pre-pries 'save' uzkodojame slaptazodi
userSchema.pre("save", async function (next) {
  // jai slaptazodis nebuvo pakeistas, tesiog einame toliau ir neskaitome kodo is sitos funkcijos
  if (!this.isModified("password")) {
    return next();
  }
  try {
    // uzkoduojame slaptazodi su bcrypt
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
