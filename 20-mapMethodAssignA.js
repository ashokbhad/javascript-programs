const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.log(`%c1. Add 10 to each element and log the result`, "color: green");

const addedArray = arrayNumbers.map((num) => num + 10);
console.log(
    `%cAfter adding 10 to each element, the new array is: [${addedArray.join(
        ", "
    )}]`, "color: purple"
);

console.log(`%c2. Cube each element and log the result`, "color: green");

const cubedArray = arrayNumbers.map((num) => Math.pow(num, 3));
console.log(
    `%cAfter cubing each element, the new array is: [${cubedArray.join(", ")}]`, "color: purple"
);

console.log(`%c3. Add the index value to each element and log the result`, "color: green");

const indexedArray = arrayNumbers.map((num, index) => num + index);
console.log(
    `%cAfter adding the index value to each element, the new array is: [${indexedArray.join(
        ", "
    )}]`, "color: purple"
);
