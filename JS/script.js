document.addEventListener("DOMContentLoaded", (event) => {
  const clearAll = document.getElementById("_clearAll");
  const clearOne = document.getElementById("_clearOne");
  const divide = document.getElementById("_divide");
  const multiply = document.getElementById("_multiply");
  const add = document.getElementById("_add");
  const subtract = document.getElementById("_subtract");
  const equal = document.getElementById("_equal");
  const calcText = document.getElementById("_calcText");
  const behind = document.querySelectorAll(".behind");
  const buttons = document.querySelectorAll(".button");
  var firstNumber = "";
  var secondNumber = "";
  var operator = "";
  var result = "";
  var display = "";

  calcText.style.wordWrap = "break-word";
  calcText.style.color = "#e4dada";
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add("active");

      setTimeout(() => {
        button.classList.remove("active");
      }, 200);
      if (!operator) {
        firstNumber += button.textContent; // Append the button's text
        display += button.textContent;
        calcText.textContent = display;
      } else {
        secondNumber += button.textContent; // Append the button's text
        display += button.textContent;
        calcText.textContent = display;
      }
    });
  });
  behind.forEach((behind) => {
    behind.addEventListener("click", () => {
      behind.classList.add("active");
      setTimeout(() => {
        behind.classList.remove("active");
      }, 200);
    });
  });
  clearAll.addEventListener("click", () => {
    calcText.textContent = "";
    operator = "";
    display = "";
    firstNumber = "";
    secondNumber = "";
  });
  clearOne.addEventListener("click", () => {
    display = display.slice(0, -1);
    calcText.textContent = display;
  });
  add.addEventListener("click", () => {
    operator = "+";
    calcText.textContent = display;
  });

  subtract.addEventListener("click", () => {
    operator = "-";
    calcText.textContent = display;
  });

  multiply.addEventListener("click", () => {
    operator = "*";
    calcText.textContent = display;
  });

  divide.addEventListener("click", () => {
    operator = "/";
    calcText.textContent = display;
  });

  equal.addEventListener("click", () => {
    if (operator == "+") {
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      console.log(result);
    } else if (operator == "-") {
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      console.log(result);
    } else if (operator == "*") {
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
      console.log(result);
    } else if (operator == "/") {
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
      console.log(result);
    }
    calcText.textContent = result.toString();
    firstNumber = "";
    secondNumber = "";
    operator = null;
    display = "";
    result = null;
  });
});
