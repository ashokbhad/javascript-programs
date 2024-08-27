console.log(`%c*** Program A. Program to count prime numbers ***`, "color: red");

const array = [3, 9, 7, 6, 19, 29, 53];

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function countPrimes(arr) {
    return arr.filter(isPrime);
}

const primes = countPrimes(array);

primes.forEach((num) => {
    console.log(`%c>>> ${num} is prime number <<<`, "color: pink");
});

console.log(
    `%c*** Total prime numbers from given array [${array}] are : ${primes.length} `,
    "color:purple"
);

function spaceCount(str) {
    return (str.match(/ /g) || []).length;
}

// Test strings
const string1 = "Revision is the mother of success";
const string2 = "JavaScript is the language of internet world";

console.log(
    `%c=== Total prime number white spaces from string “${string1}” are : ${spaceCount(
        string1
    )}`,
    "color:green"
);
console.log(
    `%c=== Total prime number white spaces from string “${string2}” are: ${spaceCount(
        string2
    )}`,
    "color:green"
);

console.log(`%c*** Program B. Program to find duplicate characters: ***`, "color: red");

function duplicateCharCount(str) {
    // Convert the string to lowercase and remove spaces for uniformity
    str = str.toLowerCase().replace(/\s+/g, "");

    // Create a map to count occurrences of each character
    const charCount = new Map();

    // Populate the map with character counts
    for (const char of str) {
        if (charCount.has(char)) {
            charCount.set(char, charCount.get(char) + 1);
        } else {
            charCount.set(char, 1);
        }
    }

    // Prepare an array to hold duplicate characters
    const duplicates = [];

    // Iterate over the map to find characters that appear more than once
    for (const [char, count] of charCount) {
        if (count > 1) {
            duplicates.push(`${char} – ${count}`);
        }
    }

    // Print the result
    console.log(duplicates.join(", "));
}

// Test the function with the provided strings
console.log("%c>>> Duplicate characters in 'Banana' <<<", "color: yellow");
duplicateCharCount("Banana");

console.log("%c>>> Duplicate characters in 'Apple' <<<", "color: yellow");
duplicateCharCount("Apple");

console.log("%c>>> Duplicate characters in 'Software Developer' <<<", "color: yellow");
duplicateCharCount("Software Developer");




console.log(`reference for assign B from class`);

let str = "Banana";  // a - 3, n - 2
let finalOutput = {};
for (let index = 0; index < str.length; index++) {
    const element = str.charAt(index);
    let count = 0;
    for (let j = 0; j < str.length; j++) {
        const char = str.charAt(j);
        if (char == element) {
            count++;
        }
    }
    // console.log(element, count);
    if (count > 1) {
        finalOutput[element] = count;
    }
}
// console.log(finalOutput);
for (const key in finalOutput) {
    const element = finalOutput[key];
    console.log(`${key} - ${element}`);

}
