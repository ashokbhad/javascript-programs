let array = [10, 20, 30, 20, 80];
console.log(array);
const result = array.join(",");
console.log(result);
console.log( typeof result);







console.log(`========= Spread Operator ==========`);
console.log(`========== 1. Creating new array from existing array ===========`);
let arrayFive = [10, 20, 30, 20, 80];
console.log(arrayFive);
console.log(...arrayFive);
let arraySix = [...arrayFive];

console.log(`========== 2. Array concatenation ===========`);
let arraySeven = [10, 20, 30];
let arrayEight = [100, 200, 930];
let arrayNine = [...arraySeven, ...arrayEight];
console.log(arrayNine);



console.log(`========== Sum the array elements ===========`);
let arrayTen = [10, 20, 30, 20, 10];
let sum = 0;
for (const element of arrayTen) {
    sum = sum + element;   
}
console.log(sum);




let mySet = new Set(); 
mySet.add(10);
mySet.add(50);
mySet.add(20);
mySet.add(50);
mySet.add(20);
console.log(mySet);

console.log(mySet.size);
mySet.delete(20);
console.log(mySet);

console.log(mySet.has(100));
console.log(mySet.has(10));

console.log(`=======================`);
for (const element of mySet) {
    console.log(element);
}

console.log(`====== Remove duplicate elements from array =======`);
let array1 = [10, 20, 30, 20, 80, 30, 10];
let arrayNew = [...new Set(array)];
console.log(arrayNew);


console.log("======= 2. Reverse String==============");
const js = "JavaScript"; // tpircSavaJ
let reverseString = js.split("").reverse().join("");
console.log(reverseString);

console.log("======Reverse String=======");

let jsReverse = "";
for (let index = js.length-1; index >=0; index--) {
    let char = js.charAt(index);
    jsReverse = jsReverse + char;
}
console.log(jsReverse);