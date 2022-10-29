const sideTriangle = document.querySelectorAll(".sides");
const calculateAreaBtn = document.querySelector("#area-calculate-btn");
const outputE1 = document.querySelector("#output");

function areaCalculate() {
  const areaOfTriangle =
    0.5 * Number(sideTriangle[0].value) * Number(sideTriangle[1].value);
  outputE1.innerText = "Area of triangle is = " + areaOfTriangle;
}

calculateAreaBtn.addEventListener("click", areaCalculate);
