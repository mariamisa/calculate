const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operation = document.getElementById("operation");
const calcBtn = document.getElementById("calc");
const resultDiv = document.getElementById("result");

function calculate(x, y, op) {
  console.log(x, y, op);
  let result = 0;
  switch (op) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = x / y;
      break;
    default:
      result = "some error";
  }
  return result;
}
calcBtn.addEventListener("click", () => {
  const result = calculate(+num1.value, +num2.value, operation.value);
  resultDiv.textContent = result;
});
