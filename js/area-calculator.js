function calculateTriangleArea() {
  const base = getInputValue("triangle-base");
  const height = getInputValue("triangle-height");
  const area = 0.5 * baseField * heightField;
  elementInnerText("triangle-area", area);
}

function calculateRectangleArea() {
  const width = getInputValue("rectangle-width");
  const length = getInputValue("rectangle-length");
  const area = width * length;
  elementInnerText("rectangle-area", area);
}

function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");
  const area = base * height;
  elementInnerText("parallelogram-area", area);
}

function calculateRhombusArea() {
  const d1 = getInputValue("rhombus-d1");
  const d2 = getInputValue("rhombus-d2");
  const area = 0.5 * d1 * d2;
  elementInnerText("rhombus-area", area);
}

function calculateEllipseArea() {
  const radius1 = getInputValue("ellipse-radius1");
  const radius2 = getInputValue("ellipse-radius2");
  const area = 3.1416 * radius1 * radius2;
  elementInnerText("ellipse-area", area);
}
// reuseable get input value field in number
function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId).value;
  return parseFloat(inputField);
}

//  reusable set span text
function elementInnerText(elementId, area) {
  const element = (document.getElementById(elementId).innerText = area);
}
