const express = require("express");
const app = express();
const tasks = require("./routes/task");
const connectDB = require("./DB/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

require("dotenv").config();

//middleware
app.use(express.static("./public"));
app.use(express.json());

//route

app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

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
