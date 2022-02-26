const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: String,
  compeleted: Boolean,
});

module.exports = mongoose.model("Task", TaskSchema);
