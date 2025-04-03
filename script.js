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

   if (dropdown.value == "Add") {
      infoElement.innerHTML = `<math><mi>a</mi><mo>+</mo><mi>b</mi><mo>=</mo><mo>?</mo></math>`
      if (isNaN(decimal1)) {
         MathJax.typesetPromise()
         return
      }
      result = decimal1 + decimal2
      resultElement.innerHTML = `<math><mn>${numberWithCommas(decimal1)}</mn><mo>+</mo><mn>${numberWithCommas(
         decimal2
      )}</mn><mo>=</mo><mn>${resultConditioner(result)}</mn></math>`
   } else if (dropdown.value == "Subtract") {
      infoElement.innerHTML = `<math><mi>a</mi><mo>-</mo><mi>b</mi><mo>=</mo><mo>?</mo></math>`
      if (isNaN(decimal1)) {
         MathJax.typesetPromise()
         return
      }
      result = decimal1 - decimal2
      resultElement.innerHTML = `<math><mn>${numberWithCommas(
         decimal1
      )}</mn><mo>-</mo><mn> ${numberWithCommas(decimal2)}</mn><mo>=</mo><mn>${resultConditioner(
         result
      )}</mn></math>`
   } else if (dropdown.value == "Multiply") {
      infoElement.innerHTML = `<math><mi>a</mi><mo>&#xd7;</mo><mi>b</mi><mo>=</mo><mo>?</mo></math>`
      if (isNaN(decimal1)) {
         MathJax.typesetPromise()
         return
      }
      result = decimal1 * decimal2
      resultElement.innerHTML = `<math><mn>${numberWithCommas(
         decimal1
      )}</mn><mo>&#xd7;</mo><mn>${numberWithCommas(decimal2)}</mn><mo>=</mo><mn>${resultConditioner(
         result
      )}</mn></math>`
   } else if (dropdown.value == "Divide") {
      infoElement.innerHTML = `<math><mi>a</mi><mo>&#xf7;</mo><mi>b</mi><mo>=</mo><mo>?</mo></math>`
      if (isNaN(decimal1)) {
         MathJax.typesetPromise()
         return
      }
      if (decimal2 == 0) {
         result = "infinity"
      } else result = decimal1 / decimal2
      resultElement.innerHTML = `<math><mi>${numberWithCommas(
         decimal1
      )}</mi><mo>&#xf7;</mo><mn>${numberWithCommas(decimal2)}</mn><mo>=</mo><mn>${resultConditioner(
         result
      )}</mn></math>`
   } else if (dropdown.value == "Exponent") {
      infoElement.innerHTML = `<math><msup><mi>a</mi><mi>b</mi></msup><mo>=</mo><mo>?</mo></math>`
      if (isNaN(decimal1)) {
         MathJax.typesetPromise()
         return
      }
      result = Math.pow(decimal1, decimal2)
      resultElement.innerHTML = `<math><msup><mn>${numberWithCommas(decimal1)}</mn><mn>${numberWithCommas(
         decimal2
      )}</mn></msup><mo>=</mo><mn>${resultConditioner(result)}</mn></math>`
   } else if (dropdown.value == "Root") {
      infoElement.innerHTML = `<math><mroot><mi>a</mi><mi>b</mi></mroot><mo>=</mo><mo>?</mo></math>`
      if (isNaN(decimal1)) {
         MathJax.typesetPromise()
         return
      }
      if (decimal1 < 0) {
         result = Math.pow(decimal1 * -1, 1 / decimal2) * -1
      } else {
         result = Math.pow(decimal1, 1 / decimal2)
      }
      resultElement.innerHTML = `<math><mroot><mn>${numberWithCommas(decimal1)}</mn><mn>${numberWithCommas(
         decimal2
      )}</mn></mroot><mo>=</mo><mn>${resultConditioner(result)}</mn></math>`
   } else if (dropdown.value == "Logarithm") {
      infoElement.innerHTML = `<math><msub><mi>log</mi><mi>a</mi></msub><mfenced><mi>b</mi></mfenced><mo>=</mo><mo>?</mo></math>`
      if (isNaN(decimal1)) {
         MathJax.typesetPromise()
         return
      }
      result = Math.log(decimal2) / Math.log(decimal1)
      resultElement.innerHTML = `<math><msub><mi>log</mi><mn>${numberWithCommas(
         decimal1
      )}</mn></msub><mfenced><mn>${numberWithCommas(
         decimal2
      )}</mn></mfenced><mo>=</mo><mn>${resultConditioner(result)}</mn></math>`
   }
   MathJax.typesetPromise() //style all new mathml because mathjax otherwise only runs on page load
}

function resultConditioner(result) {
   //Intelligent rounding. Results with only decimal component need sig figs,
   //results greater than 1 do not
   if (result < 1 && result > -1) {
      result = numberWithCommas(+result.toPrecision(4))
   } else {
      result = numberWithCommas(+result.toFixed(4))
   }
   return result
}

function numberWithCommas(number) {
   //taken from SO. Worked better than .toLocaleString()
   return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
}
