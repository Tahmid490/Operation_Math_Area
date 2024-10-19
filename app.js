const check = (w, l, operation, b, h, r) => {
  let value;
  switch (operation) {
    case "square":
      value = w ** 2;
      document.write(`<h1>Area of a ${operation}: ${w} ** 2 = ${value}</h1>`);
      break;
    case "triangle":
      value = 0.5 * b * h;
      document.write(`<h1>Area of a ${operation}: 0.5 * ${b} * ${h} = ${value}</h1>`);
      break;
    case "rectangle":
      value = l * w;
      document.write(`<h1>Area of a ${operation}: ${l} * ${w} = ${value}</h1>`);
      break;
    case "circle":
      value = 3.1416 * r ** 2;
      document.write(`<h1>Area of a ${operation}: 3.1416 * ${r} ** 2 = ${value}</h1>`);
      break;
    default:
      document.write("<h1>Invalid operation</h1>");
      break;
  }
};

let width = prompt("Enter the width: ");
let length = prompt("Enter the length: ");
let formula = prompt("Which operation do you want to perform? (square, rectangle, triangle, circle) ");
let base = prompt("Enter the base (for triangle): ");
let height = prompt("Enter the height (for triangle): ");
let radius = prompt("Enter the radius (for circle): ");

// Call the function and pass the inputs
check(width, length, formula, base, height, radius);
