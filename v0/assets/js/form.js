document.getElementById("video").onclick = function(){
    let inhaltseingabe = document.createElement("textarea");
    inhaltseingabe.id = "inhalt";
    inhaltseingabe.placeholder = "Video URL";
    inhaltseingabe.name = "content";
    inhaltseingabe.required = true;
    document.getElementById("inhalt").replaceWith(inhaltseingabe);
}
document.getElementById("text").onclick = function(){
    document.getElementById("dauer").required = false;
    let inhaltseingabe = document.createElement("input");
    inhaltseingabe.id = "inhalt";
    inhaltseingabe.placeholder = "Inhalt";
    inhaltseingabe.name = "content";
    inhaltseingabe.required = true;
    document.getElementById("inhalt").replaceWith(inhaltseingabe);
}