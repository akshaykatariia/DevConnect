const mongoose = require("mongoose");

const connectDB = async () => {
  // console.log(process.env.DB_CONNECTION_SECRET);
  await mongoose.connect(
     "mongodb+srv://admin:AuVv3s4oICzC8ETN@cluster0.qhpbxdr.mongodb.net/DevConnect?retryWrites=true&w=majority&appName=Cluster0"
  );
};

module.exports = connectDB;
