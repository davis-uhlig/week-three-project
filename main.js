const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
let btnList = document.querySelectorAll(".squares");
let display = document.getElementById("text-content");
var evalArray = [];
var operatorArray = [];
for (let i = 0; i < btnList.length; i++) {
  let btn = btnList[i];

  btn.addEventListener("click", function addDisplay(event) {
  console.log(btn);
  
  display.innerHTML += btn.innerHTML;
  if (btn.classList.contains("clear")){
    var clearInput = "";
    display.innerHTML = clearInput;
    evalArray=[];
  }

  else if (btn.classList.contains("operator")) {
    evalArray.push(display.innerHTML);
    operatorArray.push(btn.innerHTML);
    console.log(evalArray);
  }


})
// function equal(string) {
//   newDisplay = display.innerHTML;
//   newDisplay = eval(newDisplay);
//   display.innerHTML = newDisplay;

}
