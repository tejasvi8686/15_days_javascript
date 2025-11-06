// function findEvenOdd(number) {
//   if (number % 2 === 0) {
//     console.log("number is even");
//   } else {
//     console.log("number is odd");
//   }
// }

// findEvenOdd(3);

// function checknumberisevenorodd(number) {
//   const reminder = number % 2;

//   if (reminder === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }

// console.log(checknumberisevenorodd(2));

// function checkoddeven(a) {
//   return a % 2 === 0 ? "even" : "odd";
// }

// console.log(checkoddeven(2));

// function findnumbersmall (a , b , c){
//   if ( a < b && a < c) {
//     return a; 
//   }

//   else if (b < a && b < c) {
//     return b;
//   }

//   else if(c < a && c < b) {
//     return c;
//   }

//   return a;
// }


const numbers = [100, 20, 30];
const smallest = Math.min(...numbers);
console.log(smallest); // Output: 10


 