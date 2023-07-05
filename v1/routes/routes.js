const express = require("express");
const router = express.Router();
// [TODO]
// Weitere benoetigte Module einbinden

router.get("/", function (req, res) {
  // [TODO]
  // Implementieren: Liste der Kategorien anzeigen
  //res.render("list");
  res.redirect("/list.html");
});

router.get("/tutorials", function (req, res) {
  // [TODO]
  // Implementieren: Tutorials zur gegebenen Kategorie anzeigen
  // (Kategorie als Anfrage/Query-Parameter gegeben,
  // Zugriff erfolgt mit: req.query.category)
  let category = req.query.category;
  if (category != undefined && category.toUpperCase() == "WEB-ENTWICKLUNG") {
    res.redirect("/tutorials.html");
  }
});

router.get("/tutorial", function (req, res) {
  // [TODO]
  // Implementieren: Details zum Tutorial mit gegebenem Namen anzeigen
  // (Name als Anfrage/Query-Parameter gegeben,
  // Zugriff erfolgt mit: req.query.name)
  let name = req.query.name;
  if (name != undefined) {

    if (name.toUpperCase() == "NODE-JS") {
      res.redirect("/tutorial.html");
    }
    if(name.toUpperCase() == "HTML5"){
      //res.redirect("/tutorials.html");
    }
    
  }
});

router.get("/form", function (req, res) {
  // [TODO]
  // Implementieren: Formular zum Hinzufügen eines neuen Tutorials anzeigen
  res.redirect("/form.html");
});

router.post("/form", function (req, res) {
  // [TODO]
  // Implementieren: Hinzufügen eines neuen Tutorials, danach Weiterleitung nach "/"

  res.redirect("/");
});

module.exports = router;
