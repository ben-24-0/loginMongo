const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/loginSignupTutorial")
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("error");
  });

const LoginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("Collection1", LoginSchema);
module.exports = collection;
