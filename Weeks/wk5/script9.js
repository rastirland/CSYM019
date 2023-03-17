
var myVariable = 0;

function myClickEvent(){
    myVariable = myVariable + 1;
    console.log(myVariable);
}

document.addEventListener("DOMContentLoaded", loadEvent);

function loadEvent(){
    document.addEventListener("keydown", myKeyDownEvent);
    document.addEventListener('click' , myClickEvent);
}
 
var timer =  0;
//var cleartimer = 0;

function myKeyDownEvent(event){
    console.log(event.keyCode);
    clearInterval(timer);
    if(event.keyCode==37){
        

       // setInterval(changePositionLeft, 10);
       
       timer = setInterval(changePositionLeft, 10);
       

        
    }
    if(event.keyCode==39){
        timer = setInterval(changePositionRight, 10);
    }
    if(event.keyCode==38){
        timer = setInterval(changePositionTop, 10);
    }
    if(event.keyCode==40){
        timer = setInterval(changePositionBottom, 10);
    }
}

function changePositionLeft() {
    var element = document.getElementById("circle");
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 0.90 + 'px';   
   // element.style.top = positionLeft - 0.90 + 'px';  
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