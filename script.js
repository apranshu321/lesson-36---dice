var dice;
var dices = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"];
var stopped = true;
var t;
function stopstart(){
    if(stopped){
        stopped = false;
        t = setInterval(change, 10)
    }
    else{
        clearInterval(t);
        stopped = true;
    }
}
function change(){
    var random = Math.floor(Math.random()*6);
    dice.innerHTML = dices[random]

}

window.onload = function(){
    dice = document.getElementById("dice");
    stopstart();
}


