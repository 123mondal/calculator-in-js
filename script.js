const btn7 = document.getElementById("btn7");
const numbers = document.getElementById("numbers");
const numberBtns = document.querySelectorAll(".btnNum");
const operatorBtns = document.querySelectorAll(".ope");
const btnClear = document.getElementById("btnClear");
const btnRmv = document.getElementById("btnRmv");
const result = document.getElementById("result");

// var for set number in numbers input and more
let numText = "";
let ope;
let num1 = 0,
  num2 = 0,
  res = 0;
let visuText;

// Clear all numbers
btnClear.addEventListener("click", () => {
  numText = "";
  numbers.value = "0";
});

// Remove number one by one
btnRmv.addEventListener("click", () => {
  numText = numText.substr(0, numText.length - 1);
  numbers.value = numText;
});

// All numbers
numberBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    numText += this.textContent;
    numbers.value = numText;
  });
});

// All arthmetic operators
operatorBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // numText += this.textContent;
    // numbers.value = numText;
    ope = btn.textContent;
    num1 = Number(numText);
    visuText = `${num1} ${ope}`;
    result.textContent = visuText;
    console.log("num1 = " + num1);
    numText = "";
  });
});

// The Equal Button.
document.getElementById("btnEqual").addEventListener("click", () => {
  num2 = Number(numText);
  console.log("num2 = " + num2);
  if (num1 === 0 || num1 === undefined || num2 === 0 || num2 === undefined) {
    console.log("type number");
  } else {
    switch (ope) {
      case "+":
        res = num1 + num2
        numText = String(res.toFixed(2));
        visuText += ` ${num2} = ${res.toFixed(2)}`;
        break;
      case "-":
        res = num1 - num2
        numText = String(res.toFixed(2));
        visuText += ` ${num2} = ${res.toFixed(2)}`;
        break;
      case "*":
        res = num1 * num2;
        numText = String(res.toFixed(2));
        visuText += ` ${num2} = ${res.toFixed(2)}`;
        break;
      case "/":
        res = num1 / num2;
        numText = String(res.toFixed(2));
        visuText += ` ${num2} = ${res.toFixed(2)}`;
        break;
    }
    result.textContent = visuText;
    visuText = "";
    numbers.value = numText;
    num1 = 0;
    num2 = 0;
  }
});
