const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

const conn = "mongodb://localhost:27017/uploads";
mongoose.connect(conn, { useNewUrlParser: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(require("./routes"));

app.listen(3000);
