function calculateDecimal() {
    const decimal1Element = document.querySelector("#decimalCalculator #dec1Input");
    const decimal2Element = document.querySelector("#decimalCalculator #dec2Input");
    const dropdown = document.querySelector("#decimalCalculator #dropdown")
    const resultElement = document.querySelector("#decimalCalculator .result");
    let decimal1 = parseFloat(decimal1Element.value)
    let decimal2 = parseFloat(decimal2Element.value)
    let result=0
    console.log(decimal1)


    if (dropdown.value=="Add") {
        result = decimal1+decimal2
    } else if (dropdown.value=="Subtract") {
        result = decimal1-decimal2
    } else if (dropdown.value=="Multiply") {
        result = decimal1*decimal2
    } else if (dropdown.value=="Divide") {
        result = decimal1/decimal2
    } else if (dropdown.value=="Exponent") {
        result = decimal1^decimal2
    } else if (dropdown.value=="Root") {

    } else if (dropdown.value=="Logarithm") {

    }

    resultElement.innerHTML = `Answer: ${result}`

}