for(let i = 1; i<101; i++){
    let tic = false; let tac = false;
    if(i%3 == 0){

        tic = true;
    }
    if (i%5 == 0){
        tac = true;
    }
    if(tic && tac){
        console.log(`TicTac`);
    }
    else if(tic){
        console.log(`Tic`);
    }
    else if(tac){
        console.log(`Tac`);
    }
    
    else{
        console.log(`${i}`);
    }
}