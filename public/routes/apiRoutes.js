const router = require("express").Router();

const notes = require("../../db/db.json");
const fs = require("fs");

router.get("/notes", (req, res) => {
  res.json(notes);
});

router.get("/notes/:id", (req, res) => {
  const id = req.params.id;
  res.json(notes[id]);
});

router.post("/notes", function (req, res) {
  var newnote = req.body;

  newnote.id = notes.length;

  console.log(newnote);

  notes.push(newnote);

  fs.writeFile("db/db.json", JSON.stringify(notes), function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Commit logged!");
    }
  });

  res.json(newnote);
});

router.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    if (note.id === parseInt(id)) {
      notes.splice(i, 1);
    }
  }

  fs.writeFile("db/db.json", JSON.stringify(notes), function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Committed!");
    }
  });

  res.json(notes);
});

module.exports = router;
