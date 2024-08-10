console.log(
  `%c1).WAP to print numbers from 5 to 15 by incrementing 1`,
  "color:green"
);

for (let i = 5; i <= 15; i++) {
  console.log(i);
}

console.log(
  `%c2).WAP to print numbers from 50 to 40 by decrementing by 1`,
  "color:green"
);

for (let i = 50; i >= 40; i--) {
  console.log(i);
}

console.log(`%c3).WAP to find first 15 odd numbers.`, "color: green");

let oddNumber = 1;
for (let i = 0; i < 15; i++) {
  console.log(oddNumber);
  oddNumber += 2;
}

console.log(`%c4).WAP to find first 10 even numbers.`, "color: green");
for (let i = 1; i <= 10; i++) {
  console.log(i * 2);
}

console.log(
  `%c5). WAP to print the table of 5 (5, 10, 15,20, 25,…..50)`,
  "color: green"
);

for (let i = 1; i <= 10; i++) {
  console.log(5 * i);
}

console.log(
  `%c6). WAP to print the table of 10 (10, 20, 30, 40,... 100)`,
  "color: green"
);
for (let i = 1; i <= 10; i++) {
  console.log(10 * i);
}

console.log(
  `%c7). WAP to print the table of 10 in reverse order (10, 20, 30, 40,... 100)`,
  "color: green"
);
for (let i = 10; i >= 1; i--) {
  console.log(10 * i);
}
