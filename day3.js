function reverseString(name) {
  if (typeof name !== "string") {
    throw new Error("Only string are allowed");
  }

  let reversed = "";
  for (let i = name.length - 1; i >= 0; i--) {
    reversed = reversed + name[i];
    console.log("reversed", reversed);
  }

  return reversed;
}

console.log(reverseString("tejasvi"));
