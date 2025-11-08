//write a function that calculate and print the sum of digit of a given number

function sumofdigits(number) {
    if (number < 0) {
        throw new Error("Number must be positive");
    }
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

console.log(sumofdigits(12345));
