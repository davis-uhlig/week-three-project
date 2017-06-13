const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
let btnList = document.querySelectorAll(".squares");
let display = document.getElementById("text-content");
var solution;

for (let i = 0; i < btnList.length; i++) {
  let btn = btnList[i];

  btn.addEventListener("click", addDisplay)

function addDisplay(event){
  if (btn.classList.contains("numbers")){
    display.innerHTML += btn.innerHTML;

  }
  else if (btn.classList.contains("clear")){
    var clearInput = "";
    display.innerHTML = clearInput;
  }

  // else if (btn.classList.contains("operator")) {
  //   evalArray.push(display.innerHTML);
  //   operatorArray.push(btn.innerHTML);
  //   console.log(evalArray);
  // }

  else if (btn.classList.contains("equals")) {
    solution = eval(display.innerHTML);
    console.log(solution);
    display.innerHTML = solution;
  }




}


}
