console.log(`%c Numeric string used with + gives string type`, "color: purple");

let result;

console.log(`%c*** step-1 ***`, "color: green");
result = "3" + 2;
console.log(result); // "32"
console.log(`Reason: %c 1). If both operands are strings, or if one operand is a string, JavaScript interprets + as a concatenation operator.
         2). When you write "3" + 2, JavaScript treats 2 as a string (implicitly converting it), and concatenates it with "3". Therefore, "3" + 2 results in the string "32".`, "color: yellow");

console.log(`%c*** step-2 ***`, "color: green");
result = "3" + true;
console.log(result); // "3true"
console.log(`Reason: %c Same as in the step-1.`, "color: yellow");


console.log(`%c*** step-3 ***`, "color: green");
result = "3" + undefined;
console.log(result); // "3undefined"
console.log(`Reason: %c Same as in the step-1.`, "color: yellow");

console.log(`%c*** step-4 ***`, "color: green");
result = "3" + null;
console.log(result); // "3null"
console.log(`Reason: %c Same as in the step-1.`, "color: yellow");

console.log(`%c*** step-5 ***`, "color: green");
result = "5" + false;
console.log(result); // "5false"
console.log(`Reason: %c Same as in the step-1.`, "color: yellow");
