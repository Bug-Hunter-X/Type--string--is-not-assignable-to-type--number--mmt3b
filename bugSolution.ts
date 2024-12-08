function add(a: number, b: number): number {
  return a + b;
}

function isNumber(arg: any): arg is number {
  return typeof arg === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    // Handle the case where inputs aren't numbers
    console.error('Error: Inputs must be numbers');
    return 0; // Or throw an error
  }
}

const result1 = addSafe(1, 2); // Works correctly
const result2 = addSafe("1", 2); // Handles the error
const result3 = addSafe(1, "2"); //Handles the error