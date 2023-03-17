
// function toggleTransparent() {
//     const circle = document.getElementById('circle');
//     circle.classList.toggle('transparent');
//   }
  
//   function myLoadFunction() {

    
//     const circle = document.getElementById('circle');

//     //activates when hoover over click me
//     // circle.addEventListener('mouseover', toggleTransparent);
//     // circle.addEventListener('mouseout', toggleTransparent);
//     // activates when clicked 
//     circle.addEventListener('click', toggleTransparent);
//   }


document.addEventListener("DOMContentLoaded", loadEvent);

function loadEvent(){
    document.addEventListener("keydown", myKeyDownEvent);
}
 

function myKeyDownEvent(event){
    console.log(event.keyCode);
    if(event.keyCode==37){
        setInterval(changePositionLeft, 10);
    }
}
function changePositionLeft() {
    var element = document.getElementById("circle");
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 0.90 + 'px';   
}