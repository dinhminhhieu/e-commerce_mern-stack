// Kết nối MongoDB
const { default: mongoose } = require("mongoose");

const uri = process.env.MONGODB_URI;
const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(uri);
    if (conn.connection.readyState === 1) {
      console.log("Connection to database is successfully!");
    }
  } catch (error) {
    console.log("Connection to database is faled!");
    throw new Error(error);
  }
};

module.exports = dbConnect;
