const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "IAMYASIRSOHAILSTUDENTOFGOVTCOLLEGE";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: [3, "Name should contains atleast 3 characters"],
  },
  phone: {
    type: Number,
    required: true,
    trim: true,
    min: 3,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: [3, "Name should contains atleast 3 characters"],
  },
  age: {
    type: Number,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [3, "Name should contains atleast 3 characters"],
  },
  tokens: [
    {
      token: {
        type: String,
        trim: true,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});
userSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this.id }, SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};
const User = new mongoose.model("FbUser", userSchema);

module.exports = User;
