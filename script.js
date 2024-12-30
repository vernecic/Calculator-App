const button = document.querySelectorAll(".btn");
const number = document.querySelectorAll(".number");
const display = document.getElementById("display");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const equal = document.querySelector(".equal");
const division = document.querySelector(".divide");
const times = document.querySelector(".times");
const operators = document.querySelectorAll(".operator");
// 3.
let num1 = ""; // mora bit ""
let num2 = "";
let operator = "";
let currentValue = "";

function addToDisplay(x) {
  currentValue = x;
  display.value += currentValue;
}
// 1.
function resetDisplay() {
  display.value = "";
  num1 = "";
  num2 = "";
  operator = "";
  currentValue = "";
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiplay(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Can't divide with 0!";
  }
  return a / b;
}

// 3.
function operate(num1, op, num2) {
  let result;
  if (op === "+") {
    result = num1 + num2; //add(num1, num2)
  } else if (op === "-") {
    result = subtract(num1, num2);
  } else if (op === "*") {
    result = multiplay(num1, num2);
  } else if (op === "/") {
    result = divide(num1, num2);
  } else {
    result = "Wrong operator";
  }
  console.log(result);
  return result;
}
number.forEach((num) => {
  num.addEventListener("click", function () {
    if (operator === "") {
      num1 += num.value; // ako nema operatora sprema se u num1, ako ima operatora sprema se u num2
    } else {
      num2 += num.value;
    }
    addToDisplay(num.value); // ide na display
    console.log(`num1 is ${num1}`, `num2 is ${num2}`);
  });
});

operators.forEach((op) => {
  op.addEventListener("click", function () {
    if (num1 !== "") {
      operator = op.value; // ako postoji num1 sprema se operator

      addToDisplay(op.value);
    }
    console.log(`operator is ${op.value}`);
  });
});

equal.addEventListener("click", function () {
  if (num1 !== "" && num2 !== "" && operator !== "") {
    //ako nisu prazni;
    let result = operate(parseInt(num1), operator, parseInt(num2));
    display.value = result;
  }
});
