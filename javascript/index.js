const chronometer = new Chronometer();
// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function start() {
  btnLeft.classList.add("stop");
  btnLeft.classList.remove("start");
  btnLeft.innerHTML = "STOP";
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
  btnRight.innerHTML = "SPLIT";
  chronometer.startClick(update);
}
function update() {
  minUni.innerText = chronometer.getMinutes();
  if (chronometer.getSeconds() > 9) {
    secUni.innerText = "";
    secDec.innerText = chronometer.getSeconds();
    return;
  }
  secDec.innerText = "0";
  secUni.innerText = chronometer.getSeconds();
}
function stop() {
  btnLeft.classList.add("start");
  btnLeft.classList.remove("stop");
  btnLeft.innerHTML = "START";
  btnRight.classList.add("reset");
  btnRight.classList.remove("split");
  btnRight.innerHTML = "RESET";
  chronometer.stopClick();
}

 function printTime() {
   // ... your code goes here
   if (!btnLeft.classList.contains("start")) {
     start();
     chronometer.startClick();
   } else {
     stop();
     chronometer.stopClick();
   }
 }
 
 function printMinutes() {
   // ... your code goes here
 }
 function printSeconds() {
   // ... your code goes here
 }
 // ==> BONUS
// function printMilliseconds() {
//   // ... your code goes here
// }
// function printSplit() {
//   // ... your code goes here
// }
// function clearSplits() {
//   // ... your code goes here
// }
// function setStopBtn() {
//   // ... your code goes here
// }
// function setSplitBtn() {
//   // ... your code goes here
// }
// function setStartBtn() {
//   // ... your code goes here
// }
// function setResetBtn() {
//   // ... your code goes here
// }
// Start/Stop Button
btnLeft.addEventListener("click", (event) => {
  // ... your code goes here
  if (event.target.classList.contains("start")) {
    start();
  } else {
    stop();
  }
});
// Reset/Split Button
btnRight.addEventListener("click", () => {
  // ... your code goes here
  chronometer.stopClick();
});