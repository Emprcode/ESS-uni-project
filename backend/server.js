const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//user route
const userRoute = require("./Routes/authorizeRoute");
app.use("/api/v1/", userRoute);

//product route
const productRoute = require("./Routes/productRoute");
app.use("/api/v1/", productRoute);
mongoose.connect(
  "mongodb+srv://Sandip:Sydney123@cluster0.xe32s.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("connected to the database");
    } else {
      console.log("cannot connect to the database");
      console.log(err);
    }
  }
);

app.listen(4000, (req, res) => {
  console.log("starting the server");
});
