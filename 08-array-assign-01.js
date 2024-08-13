const fruits = ["Banana", " Orange", " Apple", " Mango", " Water Melon"];
console.log(`%cInitial Array is: ${fruits}`, "color: purple");

console.log(`%c1. Log the first and last element`, "color: green");
console.log(`%cFirst element is: ${fruits[0]}`, "color: pink");
console.log(`%cLast element is: ${fruits[fruits.length - 1]}`, "color: pink");

console.log(
  `%c2. Add "Papaya" before "Banana" and log the array`,
  "color: green"
);
fruits.splice(0, 0, "Papaya"); // Add "Papaya" at the beginning
console.log(`%cArray after adding 'Papaya' is:  ${fruits}`, "color: pink");

console.log(`%c3. Remove "Mango" from the array`, "color: green");
const mangoIndex = fruits.indexOf("Mango");
if (mangoIndex !== -1) {
  fruits.splice(mangoIndex, 1); // Remove "Mango"
}
console.log(`%cArray after removing 'Mango' is:  ${fruits}`, "color: pink");

console.log(`%c4. Add "Pineapple" at the last position`, "color: green");
fruits.push(" Pineapple");
console.log(`%cArray after adding 'Pineapple' is:  ${fruits}`, "color: pink");

console.log(`%c5. Insert "Dragon Fruit" before "Water Melon"`, "color: green");
const waterMelonIndex = fruits.indexOf("Water Melon");
if (waterMelonIndex !== -1) {
  fruits.splice(waterMelonIndex, 0, "Dragon Fruit"); // Insert "Dragon Fruit" before "Water Melon"
}
console.log(
  `%cArray after adding 'Dragon Fruit' is:  ${fruits}`,
  "color: pink"
);

console.log(`%c6. Replace "Orange" with "Kiwi"`, "color: green");
const orangeIndex = fruits.indexOf("Orange");
if (orangeIndex !== -1) {
  fruits[orangeIndex] = "Kiwi"; // Replace "Orange" with "Kiwi"
}
console.log(
  `%cArray after replacing 'Orange' with 'Kiwi' is:  ${fruits}`,
  "color: pink"
);

console.log(`%c7. Log the elements starting from index 1 to 4`, "color: green");
console.log(
  `%cElements from index 1 to 4:  ${fruits.slice(1, 5)}`,
  "color: pink"
);

console.log(`%c8. Only select last 3 elements and log them`, "color: green");
const lastThreeElements = fruits.slice(-3); // Select last 3 elements
console.log(`%cLast 3 elements are:  ${lastThreeElements}`, "color: pink");
