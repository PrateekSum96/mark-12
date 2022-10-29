const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputE1 = document.querySelector("#output");

function calculateSumOfAngle(angle1, angle2, angle3) {
  const sumAngle = Number(angle1) + Number(angle2) + Number(angle3);
  return sumAngle;
}

function isTriangle() {
  const sumOfAngles = calculateSumOfAngle(
    inputs[0].value,
    inputs[1].value,
    inputs[2].value
  );
  if (sumOfAngles === 180) {
    outputE1.innerText = "Yay, the angles form a triangle!";
  } else {
    outputE1.innerText = "Oh Oh! The angle doesn't form a triangle";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
