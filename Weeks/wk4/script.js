// updated function so it displays in console rather than alert message
// function clickFunction() {
//     var element = document.getElementById('myinput');
//     console.log(element.value);
//     }
//     function myLoadFunction() {
//     var element = document.getElementById('mybutton');
//     element.addEventListener('click', clickFunction);
//     }
//     document.addEventListener('DOMContentLoaded', myLoadFunction);


function clickFunction() {
    var element = document.getElementById('myinput');
    var div = document.getElementById('result');
    div.firstChild.nodeValue = element.value;
    }
    function myLoadFunction() {
    var element = document.getElementById('myinput');
    // keyup is being looked for as an action listener
    element.addEventListener('keyup', clickFunction);
    }
    document.addEventListener('DOMContentLoaded', myLoadFunction);


// needs to be used when clicking, keyup is changed,  then the button tag is removed from the html code 
// function clickFunction() {
//     var element = document.getElementById('myinput');
//     var div = document.getElementById('result');
//     div.firstChild.nodeValue = element.value;
//     }
//     function myLoadFunction() {
//     var element = document.getElementById('mybutton');
//     element.addEventListener('click', clickFunction);
//     }
//     document.addEventListener('DOMContentLoaded', myLoadFunction);