const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

//security
const helmet = require("helmet");
const xssCleaner = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");

//MW
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(xssCleaner());
app.use(mongoSanitize());
app.use(hpp());

// start server
app.get("/", (req, res) => {
  res.status(200).json({
    msg: "server is running",
  });
});

// Routes
const MiddleBannerRoutes = require("./routes/MiddleBannerRoutes");

// Routes MiddleWare
app.use("/api", MiddleBannerRoutes);

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

// connect to DB
mongoose
  .connect(DB_URL)
  .then((d) => {
    console.log(`server is running on port: ${PORT}`);
    app.listen(PORT);
  })
  .catch((err) => console.log(err));
