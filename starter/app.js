require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const productRouter = require("./routes/products");

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Store API </h1><a href="/api/v1/products">Product route</a>`);
});

app.use("/api/v1/products", productRouter);

//product route
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    //connect to DB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`listening to port 5000...`);
    });
  } catch (error) {
    console.log(eer);
  }
};

start();
