const express = require("express");
const persistence = require("../models/persistence");
const router = express.Router();

// [TODO]
// Weitere benoetigte Module einbinden

router.get("/", function (req, res) {
  // [TODO]
  // Implementieren: Liste der Kategorien anzeigen
  //res.render("list");
  res.render("list", {persistence: persistence});
});

router.get("/tutorials", function (req, res) {
  // [TODO]
  // Implementieren: Tutorials zur gegebenen Kategorie anzeigen
  // (Kategorie als Anfrage/Query-Parameter gegeben,
  // Zugriff erfolgt mit: req.query.category)
  
  let categoryName = req.query.category;
  if (categoryName != undefined ) {
    let category = persistence.kategorien.find(element => element.name.toUpperCase() == categoryName.toUpperCase());
    res.render("tutorials",{persistence: persistence, categoryName: categoryName, category: category});
  }
});

router.get("/tutorial", function (req, res) {
  // [TODO]
  // Implementieren: Details zum Tutorial mit gegebenem Namen anzeigen
  // (Name als Anfrage/Query-Parameter gegeben,
  // Zugriff erfolgt mit: req.query.name)
  
  let name = req.query.name;
  if (name != undefined) {

    let tutorial = persistence.tutorials.find(element => element.name.toUpperCase() == name.toUpperCase());
    res.render("tutorial", {persistence: persistence, tutorial: tutorial})
  }
});

router.get("/form", function (req, res) {
  // [TODO]
  // Implementieren: Formular zum Hinzufügen eines neuen Tutorials anzeigen
  res.render("form");
});

router.post("/form", function (req, res) {
  // [TODO]
  // Implementieren: Hinzufügen eines neuen Tutorials, danach Weiterleitung nach "/"

  res.redirect("/");
});

module.exports = router;
