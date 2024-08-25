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
