let operators = ["*", "/", "+"];
let numberOne, numberTwo, operator;
let decimal = false;

function show(number) {
  let display = document.getElementById("display");

  if (decimal == true && number == ".") return;

  if (display.value == "" || display.value == 0) {
    if (number == 0 || operators.includes(number)) return;
    else display.value = number;
  } else {
    if (number == "-" || operators.includes(number)) {
      numberOne = display.value;
      operator = number;
      display.value = "";
      decimal = false;
    } else {
      if (number == ".") decimal = true;
      display.value += number;
    }
  }
}

function result() {
  document.getElementById("display").value = eval(
    document.getElementById("display").value
  );
}
