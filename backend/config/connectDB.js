const mongoose = require("mongoose");

const CONNECTDB = async (url) => {
  await mongoose.connect(url);
};

mongoose.set("strictQuery", false);
module.exports = CONNECTDB;
