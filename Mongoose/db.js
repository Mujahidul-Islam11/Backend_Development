const mongoose = require("mongoose");
const dotenv = require("dotenv");

// load env configuration
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MongoDBUri, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
