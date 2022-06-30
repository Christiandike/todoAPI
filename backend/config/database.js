const mongoose = require("mongoose");
const MONGO_URI =
  "mongodb+srv://chrisdike1234:chrisdike1234@christiandikecluster.i2nes5m.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const connct = await mongoose.connect(MONGO_URI);

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
