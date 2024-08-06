console.log("%c******** Assignment:02 **********", "color: purple");
console.log("%c*** Step-1 ***", "color: green");
function greaterNumber(num1, num2) {
  var result = num1 >= num2 ? num1 : num2;
  console.log(
    `Given number are: ${num1},${num2} , and the greater number is: ${result}`
  );
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log("%c*** Step-2 ***", "color: green");
function isEvenOrOddNum(num) {
  var result = num % 2 == 0 ? true : false;
  return result;
}
var result = isEvenOrOddNum(29);
console.log(`Is Number: 29 even: ${result}`);

var result = isEvenOrOddNum(44);
console.log(`Is Number: 44 even: ${result}`);

var result = isEvenOrOddNum(0);
console.log(`Is Number: 0 even: ${result}`);

var result = isEvenOrOddNum(101);
console.log(`Is Number: 101 even: ${result}`);

console.log("%c*** Step-3 ***", "color: green");
function wordLength(value) {
  var result = value.length % 2 == 0 ? "Even" : "Odd";
  return result;
}
var result = wordLength("JavaScript");
console.log(`The word "JavaScript" has: ${result} length.`);

var result = wordLength("Developer");
console.log(`The word "Developer" has: ${result} length.`);

var result = wordLength("Google");
console.log(`The word "Google" has: ${result} length.`);
