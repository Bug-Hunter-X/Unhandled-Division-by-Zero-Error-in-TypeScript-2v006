function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

try {
  let result = add(5, 3);
  console.log(result); // Output: 8

  result = subtract(10, 4);
  console.log(result); // Output: 6

  result = multiply(7, 2);
  console.log(result); // Output: 14

  result = divide(15, 0);
  console.log(result); // Throws an error
} catch (error) {
  console.error("An error occurred:", error.message);
}

// Example of handling the error gracefully and providing user-friendly feedback
function safeDivide(a: number, b: number): number | string {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

let safeResult = safeDivide(15, 0);
console.log(safeResult); // Output: Cannot divide by zero

safeResult = safeDivide(15, 3);
console.log(safeResult); // Output: 5