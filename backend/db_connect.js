const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://Ashokkumar:AshokKumarSahu@cluster0.7wppbjl.mongodb.net/iNotebook";
mongoose.set("strictQuery", true);
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongoDB");
  });
};

module.exports = connectToMongo;
