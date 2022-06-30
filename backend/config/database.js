const mongoose = require("mongoose");

const connectDB = async (URI) => {
  try {
    const connct = await mongoose.connect(URI || "mongodb://localhost:27017");

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
