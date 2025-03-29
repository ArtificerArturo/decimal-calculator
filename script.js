function calculateDecimal() {
    const decimal1Element = document.querySelector("#decimalCalculator #dec1Input")
    const decimal2Element = document.querySelector("#decimalCalculator #dec2Input")
    const dropdown = document.querySelector("#decimalCalculator #dropdown")
    const resultElement = document.querySelector("#decimalCalculator .result")
    const infoElement = document.querySelector("#decimalCalculator .info")
    let decimal1 = parseFloat(decimal1Element.value)
    let decimal2 = parseFloat(decimal2Element.value)
    if (isNaN(decimal2)) decimal2 = 0
    let result = 0

    if (dropdown.value == "") {
        infoElement.innerHTML = ""
        resultElement.innerHTML = ""
    } else if (dropdown.value == "Add") {
        infoElement.innerHTML = `<math><mi>a</mi><mo>+</mo><mi>b</mi><mo>=</mo><mo>?</mo></math>`
        if (isNaN(decimal1)) return
        result = decimal1 + decimal2
        resultElement.innerHTML = `<math><mi>${decimal1}</mi><mo>+</mo><mi>${decimal2}</mi><mo>=</mo><mo>${result}</mo></math>`
    } else if (dropdown.value == "Subtract") {
        infoElement.innerHTML = `<math><mi>a</mi><mo>-</mo><mi>b</mi><mo>=</mo><mo>?</mo></math>`
        if (isNaN(decimal1)) return
        result = decimal1 - decimal2
        resultElement.innerHTML = `<math><mi>${decimal1}</mi><mo>-</mo><mi>${decimal2}</mi><mo>=</mo><mo>${result}</mo></math>`
    } else if (dropdown.value == "Multiply") {
        infoElement.innerHTML = `<math><mi>a</mi><mo>&#xd7;</mo><mi>b</mi><mo>=</mo><mo>?</mo></math>`
        if (isNaN(decimal1)) return
        result = decimal1 * decimal2
        resultElement.innerHTML = `<math><mi>${decimal1}</mi><mo>&#xd7;</mo><mi>${decimal2}</mi><mo>=</mo><mo>${result}</mo></math>`
    } else if (dropdown.value == "Divide") {
        infoElement.innerHTML = `<math><mi>a</mi><mo>&#xf7;</mo><mi>b</mi><mo>=</mo><mo>?</mo></math>`
        if (isNaN(decimal1)) return
        if (decimal2 == 0) {
            result = "infinity"
        } else result = decimal1 / decimal2
        resultElement.innerHTML = `<math><mi>${decimal1}</mi><mo>&#xf7;</mo><mi>${decimal2}</mi><mo>=</mo><mo>${result}</mo></math>`
    } else if (dropdown.value == "Exponent") {
        infoElement.innerHTML = `<math><msup><mi>a</mi><mi>b</mi></msup><mo>=</mo><mo>?</mo></math>`
        if (isNaN(decimal1)) return
        result = Math.pow(decimal1, decimal2)
        resultElement.innerHTML = `<math><msup><mi>${decimal1}</mi><mi>${decimal2}</mi></msup><mo>=</mo><mo>${result}</mo></math>`
    } else if (dropdown.value == "Root") {
        infoElement.innerHTML = `<math><mroot><mi>a</mi><mi>b</mi></mroot><mo>=</mo><mo>?</mo></math>`
        if (isNaN(decimal1)) return
        if (decimal1 < 0) {
            result = Math.pow(decimal1 * -1, 1 / decimal2) * -1
        } else {
            result = Math.pow(decimal1, 1 / decimal2)
        }
        resultElement.innerHTML = `<math><mroot><mi>${decimal1}</mi><mi>${decimal2}</mi></mroot><mo>=</mo><mo>${result}</mo></math>`
    } else if (dropdown.value == "Logarithm") {
        infoElement.innerHTML = `<math><msub><mi>log</mi><mi>a</mi></msub><mfenced><mi>b</mi></mfenced><mo>=</mo><mo>?</mo></math>`
        if (isNaN(decimal1)) return
        result = Math.log(decimal2) / Math.log(decimal1)
        resultElement.innerHTML = `<math><msub><mi>log</mi><mi>${decimal1}</mi></msub><mfenced><mi>${decimal2}</mi></mfenced><mo>=</mo><mo>${result}</mo></math>`
    }
}
