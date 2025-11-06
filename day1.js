console.log("Hello World");

function sum(a, b) {
  const sum = a + b;
  console.log("sum of two numbers is", sum);
}

function areaofrectangle(length, breath) {
  if (length < 0 || breath < 0) {
    console.log("length and breath must be greater than 0");
  } else {
    const area = length * breath;
    console.log("area of rectangle is", area);
  }
}

areaofrectangle(-10, 20);


function areaOfRectangle(length, breadth) {
    if (length <= 0) {
        throw new Error("length must be greater than 0");
    }
    if (breadth <= 0) {
        throw new Error("breadth must be greater than 0");
    }
    const area = length * breadth;
    console.log("area of rectangle is", area);
}

areaOfRectangle(10, 20);