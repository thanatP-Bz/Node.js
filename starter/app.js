const express = require("express");
const app = express();
const tasks = require("./routes/task");
const connectDB = require("./DB/connect");
require("dotenv").config();

//middleware
app.use(express.json());

//route
app.get("/", (req, res) => {
  res.send("Task Manager");
});

app.use("/api/v1/tasks", tasks);

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Listening to the port ${port}`));
  } catch (error) {
    console.log(err);
  }
};

start();
