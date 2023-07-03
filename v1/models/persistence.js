function Bild(name, url) {
  this.name = name;
  this.url = url;
}

function Kategorie(name, bild) {
  this.name = name;
  this.bild = bild;
}

function Kapitel(name, beschreibung, dauer) {
  this.name = name;
  this.beschreibung = beschreibung;
  this.dauer = dauer;
}
function Tutorial(
  name,
  sprache,
  beschreibung,
  dauer,
  datum,
  url,
  embedCode,
  bild
) {
  this.name = name;
  this.sprache = sprache;
  this.beschreibung = beschreibung;
  this.dauer = dauer;
  this.datum = new Date(datum);
  this.url = url;
  this.embedCode = embedCode;
  this.bild = bild;
  this.kategorienListe = new Array();
  this.kapitelListe = new Array();

  this.fuegeKategorieHinzu = function (kat) {
    this.kategorienListe.push(kat);
  };
  this.fuegeKapitelHinzu = function (kap) {
    this.kapitelListe.push(kap);
  };
}
function getDauerInStundenUndMinuten(dauer) {
  let teile = dauer.split(":");
  return teile[0] + "Std. " + teile[1] + "Min.";
}

let kategorien = new Array();
let tutorials = new Array();

kategorien.push(
  new Kategorie(
    "Web-Entwicklung",
    new Bild("HTML Image", "assets/img/html.svg")
  )
);
kategorien.push(
  new Kategorie("CSS", new Bild("CSS Image", "assets/img/css.svg"))
);
kategorien.push(
  new Kategorie(
    "Java-Script",
    new Bild("JavaScript Image", "assets/img/javascript.png")
  )
);
kategorien.push(
  new Kategorie(
    "Noch eine Kategorie",
    new Bild("JavaScript Image", "assets/img/javascript.png")
  )
);

tutorials.push(
  new Tutorial(
    "Node.js Schnelleinstieg",
    "JavaScript",
    "Ein Tutorial über den Schnelleinstieg in Node.js",
    "2:30",
    "2023-04-27",
    "http://127.0.0.1:5500/v0/tutorial.html",
    "",
    new Bild("NodeJS Image", "assets/img/nodejs.svg")
  )
);
tutorials.push(
  new Tutorial(
    "HTML-5 Grundlagen",
    "HTML5",
    "Alle wichtigen HTML-5 Elemente",
    "1:20",
    "2023-04-23",
    "",
    "",
    new Bild("HTML Image", "assets/img/html.svg")
  )
);
tutorials[0].fuegeKategorieHinzu(kategorien[2]);
tutorials[1].fuegeKategorieHinzu(kategorien[0]);
tutorials[0].fuegeKapitelHinzu(
  new Kapitel("Einleitung", "Eine kurze Einleitung zu NodeJS", "1:30")
);

kategorien.sort(function (x, y) {
  return x.name.localeCompare(y.name);
});

function getTutorialsZuKategorie(kategorieName) {
  return tutorials.filter((element) =>
    element.kategorienListe.find((element) => element.name == kategorieName)
  );
}

module.exports = {
  tutorials: tutorials,
  kategorien: kategorien,
  getDauerInStundenUndMinuten: getDauerInStundenUndMinuten,
  getTutorialsZuKategorie: getTutorialsZuKategorie,
};
