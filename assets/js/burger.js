if(window.screen.width <=480){
    let burger = document.createElement("div");
    burger.id = "burger";
    
    for(let i = 0; i<3; i++){
        let zwischen = document.createElement("div");
        zwischen.className = "line";
        zwischen.style = `width: 35px; height: 5px; background-color: black; margin: 6px 0;`
        burger.append(zwischen);

    }

    
    document.querySelector("nav").prepend(burger);
    document.querySelector("nav").style = `display: flex; flex-direction: row; align-items: center;`;
    document.querySelector(".navElements").style = `display: none;`;
    let lastClickEvent = false;
    document.getElementById("burger").onclick = function(){
        if(lastClickEvent == false){
            document.querySelector(".navElements").style = "display: flex; flex-direction: column; ";
            lastClickEvent = true;
        }else{
            document.querySelector(".navElements").style = `display: none;`;
            
            lastClickEvent = false;
        }
    };

}


