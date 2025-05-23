var number;
var numbers = ["1","2","3","4","5", "6", "7", "8", "9", "10"];
var stopped = true;
var t;
function stopstart(){
    if(stopped){
        stopped = false;
        t = setInterval(change, 0.01)
    }
    else{
        clearInterval(t);
        stopped = true;
    }
}
function change(){
    var random = Math.floor(Math.random()*10);
    number.innerHTML = numbers[random]

}

window.onload = function(){
    number = document.getElementById("Number");
    stopstart();
}