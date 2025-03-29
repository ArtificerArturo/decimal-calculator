function calculateDecimal() {
  const decimal1Element = document.querySelector(
    "#decimalCalculator #dec1Input"
  );
  const decimal2Element = document.querySelector(
    "#decimalCalculator #dec2Input"
  );
  const dropdown = document.querySelector("#decimalCalculator #dropdown");
  const resultElement = document.querySelector("#decimalCalculator .result");
  const infoElement = document.querySelector("#decimalCalculator .info");
  let decimal1 = parseFloat(decimal1Element.value);
  let decimal2 = parseFloat(decimal2Element.value);
  let result = 0;

  if (dropdown.value == "Add") {
    infoElement.innerHTML = "a + b = ?";
    result = decimal1 + decimal2;
  } else if (dropdown.value == "Subtract") {
    infoElement.innerHTML = "a - b = ?";
    result = decimal1 - decimal2;
  } else if (dropdown.value == "Multiply") {
    infoElement.innerHTML = "a × b = ?";
    result = decimal1 * decimal2;
  } else if (dropdown.value == "Divide") {
    infoElement.innerHTML = "a / b = ?";
    result = decimal1 / decimal2;
  } else if (dropdown.value == "Exponent") {
    infoElement.innerHTML = "aᵇ = ?";
    result = decimal1 ^ decimal2;
  } else if (dropdown.value == "Root") {
    //to-do
  } else if (dropdown.value == "Logarithm") {
    //to-do
  }

  resultElement.innerHTML = `Answer: ${result}`;
}
