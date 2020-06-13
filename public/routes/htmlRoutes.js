const router = require("express").Router();
const path = require("path");

// html route for displaying home page

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "notes.html"));
});

module.exports = router;
