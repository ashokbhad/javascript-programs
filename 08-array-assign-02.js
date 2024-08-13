const array = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log(
  `%c1. Find the total number of elements (length) and log it to the console`,
  "color: green"
);
console.log(`%cTotal number of elements is: ${array.length}`, "color: pink");

console.log(`%c2. Log the first and last element in the array`, "color: green");
console.log(`%cFirst element is:  ${array[0]}`, "color: pink");
console.log(`%cLast element is:  ${array[array.length - 1]}`, "color: pink");

console.log(
  `%c3. Log the third last element using the length property`,
  "color: green"
);
console.log(`%cThird last element:${array[array.length - 3]} `, "color: pink");

console.log(
  `%c4. Find all even numbers using a 'for of' loop and log them`,
  "color: green"
);
for (const num of array) {
  if (num % 2 === 0) {
    console.log(`%cEven Number:  ${num}`, "color: pink");
  }
}

console.log(
  `%c5. Find all odd numbers using a 'for of' loop and log them`,
  "color: green"
);
for (const num of array) {
  if (num % 2 !== 0) {
    console.log(`%cEven Odd Number:  ${num}`, "color: pink");
  }
}

console.log(`%c6. Find the numbers which are multiples of 5`, "color: green");
for (const num of array) {
  if (num % 5 === 0) {
    console.log(`%cMultiples of 5:  ${num}`, "color: pink");
  }
}

console.log(
  `%c7. Check if the number 115 is available in the array`,
  "color: green"
);
const is115Available = array.includes(115);
console.log(
  `%cIs number 115 available in array?: ${is115Available}`,
  "color: pink"
);

console.log(
  `%c8. Check if the number 23 is available in the array`,
  "color: green"
);
const is23Available = array.includes(23);
console.log(
  `%cIs number 23 available in array?: ${is23Available}`,
  "color: pink"
);

console.log(
  `%c9. Insert numbers 55, 66 at index 3 and log the array`,
  "color: green"
);
array.splice(3, 0, 55, 66); // Insert 55 and 66 at index 3
console.log(
  `%cArray after inserting 55 and 66 at index 3: ${array}`,
  "color: pink"
);

console.log(
  `%c10. Delete 3 elements starting from index 4 and log the array`,
  "color: green"
);
array.splice(4, 3); // Remove 3 elements starting from index 4
console.log(
  `%cArray after deleting 3 elements starting from index 4: ${array}`,
  "color: pink"
);
