const player1 = "X";
const player2 = "0";
let playTime = player1;
let gameOver = false;
let player;

updatePlayer();
initSpaces();

//show what player will play
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

//show the "X" or "O" when the user clicks on the board
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
                verifyWinner
            }
        });
}
}

reset = function() { window.location.reload(); }

function verifyWinner(){
    var a1 = document.getElementById("a1").getAttribute("game");
    var a2 = document.getElementById("a2").getAttribute("game");
    var a3 = document.getElementById("a3").getAttribute("game");

    var b1 = document.getElementById("b1").getAttribute("game");
    var b2 = document.getElementById("b2").getAttribute("game");
    var b3 = document.getElementById("b3").getAttribute("game");

    var c1 = document.getElementById("c1").getAttribute("game");
    var c2 = document.getElementById("c2").getAttribute("game");
    var c3 = document.getElementById("c3").getAttribute("game");

    let winner = "";

    if ((a1 == b1 && a1 == c1 && a1 != "") || (a1 == a2 && a1 == a3 == a1 !="") || (a1 == b2 && a1 == c3 && a1 !=""))
    {
         winner = a1;
         reset();
    }
    else if ((b2 == b1 && b2 == b3 && b2 !="") || (b2 == a2 && b2 == c2 && b2 !="") || (b2 == a3 && b2 == c1 && b2 !=""))
    {
        winner = b2;
        reset();
    }
    else if((c3 == c2 && c3 == c1 && c3 !="") || (c3 == a3 && c3 == b3 && c3 != ""))
    {
        winner = c3;
        reset();
    }
    if(winner != ""){
        gameOver = true;
        reset();
    }  
}

