const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log(` 1. Log the array element with its index using forEach() with arrow function`);

arrayNumbers.forEach((element, index) => {
    console.log(`The index is [${index}] & The element is [${element}]`);
});


console.log(`2. Find the positive numbers and log on console using forEach() with arrow function`);

const positiveNumbers = arrayNumbers.filter(element => element >= 0);
console.log(`The positive element in array [${arrayNumbers}] is = [${positiveNumbers}]`);

console.log(`3. Find the negative numbers, add them into a new array and log the new array on console using arrow function
`);

console.log(`The Negative element in array [${arrayNumbers}] is = [${arrayNumbers.filter(num => num < 0)}]`);


console.log(`4. Find the even numbers and log on console using forEach() with arrow function`);

arrayNumbers.forEach((element) => {
    if (element % 2 === 0) {
        console.log(element);
    }
});

console.log(`5. Find the sum of all elements from arrayNumbers and log sum value on console`);

const sum = arrayNumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
);
console.log(sum);

console.log(`6. Log only even indexed array values on console using forEach() with arrow function`);

arrayNumbers.forEach((element, index) => {
    if (index % 2 === 0) {
        console.log(element);
    }
});
