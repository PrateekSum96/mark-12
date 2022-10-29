const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#btn");
const outputE1 = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const LengthOfHypotenuse = Math.sqrt(sumOfSquares).toFixed(2);
  outputE1.innerText = "Length of Hypotenuse = " + LengthOfHypotenuse;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
