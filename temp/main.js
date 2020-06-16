let myInput = document.getElementById("input");
let myDiv = document.getElementById("div");

myInput.onkeypress = function(){
    alert("WELCOME TO THE ULTIMATE CONVERTER");
    myDiv.innerHTML = myInput.value * 3.75;
}