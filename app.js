var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express();
var cors = require('cors');
var cookieParser = require('cookie-parser')

app.use(cors({
  origin: true,
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

routes(app);

var server = app.listen(3003, function () {
    console.log("app running on port.", server.address().port);
});