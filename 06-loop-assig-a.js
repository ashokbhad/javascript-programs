// var word = "Developer";
// var count = 0;
// for (let index = 0; index < word.length; index++) {
//   var char = word.charAt(index);
//   if (char == "e") {
//     count++;
//   }
// }
// console.log(`Count of char e is : ${count}`);

// console.log(`======= Sum of 1 to 5================`);
// var sum = 0;
// for (let index = 1; index <= 5; index++) {
//   sum = sum + index;
// }
// console.log(`Summation is ${sum}`);

console.log(
  `%c***** Step 1.Count the total number vowels in the string *****`,
  "color:green"
);
function countVowels(str) {
  const vowels = "aeiouAEIOU"; // Vowels to check
  let count = 0; // Initialize the count of vowels

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      // Check if the character is a vowel
      count++; // Increment the count if it's a vowel
    }
  }

  return count; // Return the total count of vowels
}

const string = "I am very good IT Developer";
console.log(
  `%cCount the total number vowels in the string is:${countVowels(string)}`,
  "color: purple"
); // Output: 10

console.log(
  `%c***** Step 2.Function to Get the Sum of the Cubes of Numbers from 1 to 5 *****`,
  "color: green"
);

function sumOfCubes(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i * i * i; // Cube of the number and add to the sum
  }

  return sum;
}

// Example usage
console.log(
  `%cSum of the Cubes of Numbers from 1 to 5 is: ${sumOfCubes(5)}`,
  "color:purple"
); // Output: 225 (1^3 + 2^3 + 3^3 + 4^3 + 5^3)

console.log(
  `%c***** Step 3.function to get odd position character without empty space *****`,
  "color:green"
);
var oddPositionChars = function (sentence) {
  for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    if (index % 2 == 1 && char != " ") {
      console.log(`%cCharacter at odd position: ${char}`, "color: purple");
    }
  }
};

oddPositionChars("Hard work always pays back");
oddPositionChars("Soon I will be UI IT Champ");
