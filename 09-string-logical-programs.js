return reverseStr;

const str1 = "Web Developer";
const str2 = "Billion Dollar";
const str9 = "Java";
let str1 = "Web Developer";
let str2 = "Billion Dollar";
let str3 = "Java";

console.log(`Reverse string of "${str1}" is: ${reverseStringManually(str1)}`);
console.log(`Reverse string of "${str2}" is: ${reverseStringManually(str2)}`);
console.log(`Reverse string of "${str3}" is: ${reverseStringManually(str3)}`);
console.log(`Reverse string of "${str3}" is: ${reverseStringManually(str3)}`);

console.log(" ");

console.log(`------07.Program to count character "a"------`);
function charCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "a") {
      count++;
    }
  }
  return count;
}

str1 = "JavaScript";
console.log(
  `Total count of character "a" in string "${str1}" is: ${charCount(str1)}`
);

str2 = "Do or Die";
console.log(
  `Total count of character "a" in string "${str2}" is: ${charCount(str2)}`
);

str3 = "Learn with us, Job with us";
console.log(
  `Total count of character "a" in string "${str3}" is: ${charCount(str3)}`
);

str4 = "Empowering Dreams, Guaranteeing Futures";
console.log(
  `Total count of character "a" in string "${str4}" is: ${charCount(str4)}`
);

str5 = "Any, My favorite fruit is Apple";
console.log(
  `Total count of character "a" in string "${str5}" is: ${charCount(str5)}`
);

console.log(" ");

console.log(`------08.Program to count vowels------`);
function vowelsCount(str) {
  let count = 0;
  var vowels = "aeiou";
  for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    char = char.toLowerCase();
    if (vowels.includes(char)) {
      count++;
    }
  }
  console.log(`Total number of vowels in string "${str}" is: ${count}`);
}
vowelsCount("JavaScript");
vowelsCount("HTML and CSS");
vowelsCount("Language Of Internet");
vowelsCount("I am UI Developer");
vowelsCount("Do or Die");

console.log(" ");

console.log(`------09.Program to count words------`);
function wordCount(str) {
  let word = str.split(" ");
  return word.length;
}
str1 = "JavaScript The language of Internet";
console.log(`Total count of words in string "${str1}" is: ${wordCount(str1)}`);

str2 = "Enhance Your Learning Journey with Exclusive Add-ons";
console.log(`Total count of words in string "${str2}" is: ${wordCount(str2)}`);

str3 = "Beyond frameworks, Beyond Imagination";
console.log(`Total count of words in string "${str3}" is: ${wordCount(str3)}`);

str4 = "I am passionate software developer";
console.log(`Total count of words in string "${str4}" is: ${wordCount(str4)}`);
