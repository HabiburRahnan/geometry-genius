function calculateTriangleArea() {
  // get triangle base value
  const baseField = document.getElementById("triangle-base").value;
  parseFloat(baseField);

  // get triangle height value
  const heightField = document.getElementById("triangle-height").value;
  parseFloat(heightField);
  //   calculate area
  const area = 0.5 * baseField * heightField;

  //   show triangle area

  const areaSpan = (document.getElementById("triangle-area").innerText = area);
}

function calculateRectangleArea() {
  // get rectangle width value
  const width = document.getElementById("rectangle-width").value;
  parseFloat(width);
  // get rectangle height value
  const length = document.getElementById("rectangle-length").value;
  parseFloat(length);
  //   calculate area
  const area = width * length;
  //  show    rectangle area
  const areaSpan = (document.getElementById("rectangle-area").innerText = area);
}
