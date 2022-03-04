const express = require("express");
const app = express();
const connectDB = require("./connect/connect");
const route = require("./route/router");
require("dotenv").config();

//middleware
app.use(express.json());
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));

//route
app.use("/api/v2", route);

const port = 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("listening to port 5000..");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
