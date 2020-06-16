const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
// required our API and HTML Routes
const apiRoutes = require("./public/routes/apiRoutes");
const htmlRoutes = require("./public/routes/htmlRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

//https://young-crag-53801.herokuapp.com/
//https://git.heroku.com/young-crag-53801.git
