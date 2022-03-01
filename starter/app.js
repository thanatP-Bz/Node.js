require("dotenv").config();
//async error

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Store API </h1><a href="/api/v1/products">Product route</a>`);
});

//product route
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    //connect to Db
    app.listen(port, () => {
      console.log(`listening to port 5000...`);
    });
  } catch (error) {
    console.log(eer);
  }
};

start();
