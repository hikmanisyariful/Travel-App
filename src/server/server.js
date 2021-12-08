require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 8081;

const store = {
  apiKey: {
    keyGeonames: process.env.USER_NAME_GEONAMES_API,
    keyPixabay: process.env.API_KEY_PIXABAY,
    keyWeatherbit: process.env.API_KEY_WEATHERBIT
  }
};

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile("dist/index.html");
});

app.get("/apiKey", (req, res) => {
  res.send(store.apiKey);
});

app.listen(port, () => {
  console.log("Listening on port: ", port);
});
