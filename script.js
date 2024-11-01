let operators = ["*", "/", "+"];
let numbers = [],
  operator = [];
let decimal = false;

function show(number) {
  let display = document.getElementById("display");

  if (decimal == true && number == ".") return;

  if (display.value == "" || display.value == 0) {
    if (number == 0 || operators.includes(number)) return;
    else display.value = number;
  } else {
    if (number == "-" || operators.includes(number)) {
      numbers.push(display.value);
      console.log(numbers);
      operator.push(number);
      display.value = "";
      decimal = false;
    } else {
      if (number == ".") decimal = true;
      display.value += number;
    }
  }
}

function result() {
  numbers.push(document.getElementById("display").value);
  console.log(numbers);
  for (
    let i = 0, j = 0;
    i < numbers.length - 1, j < operator.length;
    i++, j++
  ) {
    switch (operator[j]) {
      case "+":
        numbers[i + 1] = parseFloat(numbers[i]) + parseFloat(numbers[i + 1]);
        break;
      case "-":
        numbers[i + 1] = parseFloat(numbers[i]) - parseFloat(numbers[i + 1]);
        break;
      case "*":
        numbers[i + 1] = parseFloat(numbers[i]) * parseFloat(numbers[i + 1]);
        break;
      case "/":
        numbers[i + 1] = parseFloat(numbers[i]) / parseFloat(numbers[i + 1]);
        break;
    }
  }
  document.getElementById("display").value = numbers[numbers.length - 1];
}
