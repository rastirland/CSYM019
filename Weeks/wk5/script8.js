document.addEventListener("DOMContentLoaded", loadEvent);

function loadEvent(){
    document.addEventListener("keydown", myKeyDownEvent);
}
 

function myKeyDownEvent(event){
    console.log(event.keyCode);
    if(event.keyCode==37){
        setInterval(changePositionLeft, 10);
    }
    else if(event.keyCode==39){
        setInterval(changePositionRight, 10);
    }
    else if(event.keyCode==38){
        setInterval(changePositionTop, 10);
    }
    else if(event.keyCode==40){
        setInterval(changePositionBottom, 10);
    }
}

function changePositionLeft() {
    var element = document.getElementById("circle");
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 0.90 + 'px';   
}
function changePositionRight() {
    var element = document.getElementById("circle");
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + 0.9  +'px';   
}
function changePositionTop() {
    var element = document.getElementById("circle");
    var positionLeft = element.offsetTop;
    element.style.top = positionLeft - 0.9 + 'px';   
}
function changePositionBottom() {
    var element = document.getElementById("circle");
    var positionLeft = element.offsetTop;
    element.style.top = positionLeft + 0.9 + 'px';   
}