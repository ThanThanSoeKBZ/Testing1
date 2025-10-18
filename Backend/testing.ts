function addNumber(a: number, b: number): number {
    return a + b;
}

// Using the function
const num1: number = 5;
const num2: number = 10;

const sum: number = addNumber(num1, num2);
console.log(`The sum of ${num1} and ${num2} is ${sum}`);