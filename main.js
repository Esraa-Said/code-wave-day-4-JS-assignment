// Question 1
function que1(a, b) {
  if (arguments.length !== 2) {
    console.error("This function requires exactly 2 parameters.");
    return;
  }
  console.log("Parameters are:", a, b);
}

// Question 2
function addValues(...args) {
  let sum = 0;
  for (const arg of args) {
    if (typeof arg !== "number") {
      console.error("All parameters must be numerical values.");
      return;
    }
  }

  for (const arg of args) {
    sum += arg;
  }
  console.log(`The Sum of [${args}] is ${sum}`);
}

// Question 3
function reverseParameters(...args) {
  console.log(`The Original Parameters ara: ${args}`);
  return args.reverse();
}

// Question 4
function isPrime(num) {
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      console.log(`The number ${num} is not prime`);
      return;
    }
  }
  console.log(`The number ${num} is prime`);
  return;
}

// Functions Call
console.log("Task - 1");
console.log("Function Accepts only 2 parameters");
que1(1, 2);
console.log("Try Pass More than 2 parameters");
que1(1, 2, 3);
console.log("-------------------------------------------");

console.log("Task - 2");
console.log("Function add n values only numbers");
addValues(1, 2, 3);
console.log("Function add n values Try pass string");
addValues(1, 2, "3");
console.log("-------------------------------------------");

console.log("Task - 3");
console.log("Function Reverses Parameters");
let rp = reverseParameters(1, 2, 3);
console.log(`The Reversed Parameters are: ${rp}`)
console.log("-------------------------------------------");

console.log("Task - 4");
console.log("Function Checks if the number is Prime or not");
isPrime(4);
isPrime(5);
console.log("-------------------------------------------");

