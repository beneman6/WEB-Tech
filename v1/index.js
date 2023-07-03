const http = require("http");
const persistance = require ("./models/persistence");
const url = require("url");

const server = http.createServer();
server.on("request",function(request,response){
    let method = request.method;
    //console.log(request.url);
    const querryParams = url.parse(request.url, true).query;
    //console.log(querryParams.search);
    let rueckgabe = persistance.tutorials.filter(element => element.name === querryParams.search);
    response.writeHead(200,{"content-type": "text/html; charset=utf-8"});
    
    
    response.end(createSearchResults(querryParams,rueckgabe));

});
server.listen(8844,function(){
    console.log("Der server lauscht auf dem Port 8844");
});

let createSearchResults = function(querryParams,rueckgabe){
    let alleTutorials;
    for(let i = 0; i<rueckgabe.length; i++){
        alleTutorials += `<a href="${rueckgabe[i].url}">${rueckgabe[i].name}  ${rueckgabe[i].datum.toLocalDateString()}</a>\n`;
    }

    const html = `<!DOCTYPE html>
    <html lang=de>
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-width, initial-scale=1.0">
    
        <title>WEB Tutorials</title>
        <link rel="icon" type="images/x-icon" href="127.0.0.1:5500/v0/assets/img/html.svg">
        <link rel="stylesheet" href="127.0.0.1:5500/v0/assets/css/style.css">
        <link rel="stylesheet" href="127.0.0.1:5500/v0/assets/css/form.css">
        <link rel="stylesheet" href="127.0.0.1:5500/v0/assets/css/tile.css">
    
    
    </head>
    
    <body>
        <header>
            <img class="mainLogo" width="50" height="50" src="assets/img/html.svg" alt="Webseiten Logo">
            <h1>Web Entwicklung</h1>
    
        </header>
        <main>
    
            <nav><div class = "navElements"><a href="127.0.0.1:5500/v0/list.html">Liste der Kategorien</a> | <a href="127.0.0.1:5500/v0/tutorials.html">Tutorials der Kategorie X</a> | <a
                    href="127.0.0.1:5500/v0/tutorial.html"> Detaills zum Tutorial Y</a> | <a href="127.0.0.1:5500/v0/form.html">Erstellen eines neuen
                    Tutorials</a></div></nav>
            <article>
                <h2>Tutorials mit: ${querryParams.search}</h2>
                ${alleTutorials}


            </article>
            <article class="newTutorials">
                <h2 class="linear1">Neue Tutorials</h2>
                <ul>
                    <li>Node.js Schnelleinstieg 27.04.2023 - Dauer: 2:30h</li>
                    <li>HTML-5 Grundlagen 23.04.2023 - Dauer: 1:20h</li>
                </ul>
            </article></div>
        </main>
        <footer>@ by WebTech.inc</footer>
        <script src="127.0.0.1:5500/v0/assets/js/script.js" ></script>
        <script src="127.0.0.1:5500/v0/assets/js/burger.js"></script>
    </body>
    
    </html>`
    return html;
}
