const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 50,
  },
  age: {
    type: Number,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = model("user", UserSchema);

module.exports = UserModel;