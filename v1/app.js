const express = require("express");
const path = require("path");
const app = express();

const router = require("./routes/routes.js");
const persistence = require("./models/persistence.js");
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"./views"));


//app.use(express.urlencoded({extended:false})) bereitet das einlsen der Body Daten vor, auf die dann mit request.body.name zugegriffen werden kann.

app.use(express.static(path.join(__dirname,"./public")));
//Nur nicht-statische Anfragen werden weitergeleitet!
// das "/" ist standartmäßig gesetzt
// es kann auch mit app.get(URL,function), app.post und app.put gearbeitet werden
// response.redirect(URL) zum weiterleiten
// Wenn kein next aufgerufen wird, bricht die Kette immer ab!

// Use erfasst alle URL's, die mit der angegebenen beginnen!
//app.use("/",function (request, response, next) {
  //next();
//});
//app.use(function (request, response, next) {
  //response.send();
//});

app.use(router);

//Mit response.render("Dateiname",verfügbar gemachte Objekte) konnen vorgefertigte EJS Templates abgeschckt werden

app.listen(8020, function () {
  console.log("Der Express Server läuft auf Port 8020");
});
