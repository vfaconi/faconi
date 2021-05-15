const player1 = "X";
const player2 = "0";
let playTime = player1;
let gameOver = false;
let player;

updatePlayer();
initSpaces();

function updatePlayer(){
    if(gameOver) {return;}

    if(playTime == player1){
        let player = document.querySelectorAll("div#player img")[0];
        player.setAttribute("src", "img/x.jpg");
    }else{
        let player = document.querySelectorAll("div#player img")[0];
        player.setAttribute("src", "img/circle.jpg");
    }
}

function initSpaces(){
    let spaces = document.getElementsByClassName("space");
    for(i=0; i < spaces.length; i++){
        spaces[i].addEventListener("click", function(){
            if(gameOver) {return;}

            if(this.getElementsByTagName("img").length==0){
                if(playTime == player1){
                    this.innerHTML = "<img src='img/x.jpg'>";
                    this.setAttribute("game", player1);
                    playTime = player2;
                }else{
                        this.innerHTML = "<img src='img/circle.jpg'>";
                        this.setAttribute("game", player2);
                        playTime = player1;
                }
                updatePlayer();
            }
        })
    
}
}