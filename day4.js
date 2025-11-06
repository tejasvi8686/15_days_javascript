//write a function that calculate factorial of a given number 
function factorial(n) {
  if (n < 0) {
    throw new Error("Number must be positive");
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
   
  }
  return result;
}

const factorialResult = factorial(5);


