let professor = {
  firstName: "Richard",
  lastName: "Conner",
  age: 52,
  collegeName: "MIT",
  city: "Cambridge",
  certificates: [
    "Hacker Rank Participation",
    "Certificate in IFE course",
    "Certificate in Advance Programming",
  ],
  degrees: {
    engineering: "CSE",
    phd: "Advance Computing",
    diploma: "AI-ML",
    net: "NET",
    set: "SET",
  },
};

console.log(`-----Creating an object named "professor"-----`);
console.log(professor);

console.log(`-----Adding new property "totalExperience"-----`);
professor.totalExperience = "14 years";
console.log(`After adding new property: ${professor.totalExperience}`);

console.log(`-----Modifying or updating existing property-----`);
professor.city = "London";
console.log(`Updated property (City): ${professor.city}`);
console.log(professor);

console.log(`-----Adding new Certificate-----`);
professor.certificates.splice(2, 0, "Oracle Certified");
console.log(`After adding new Certificate: ${professor.certificates}`);

console.log(`-----Log the last element of array 'certificates'-----`);
console.log(
  `Last certificate: ${
    professor.certificates[professor.certificates.length - 1]
  }`
);

console.log(`-----Traverse the array using for loop-----`);
for (const element of professor.certificates) {
  console.log(`Certificate: ${element}`);
}

console.log(`-----Log complete object on console using for in loop-----`);
for (const key in professor) {
  if (Object.prototype.hasOwnProperty.call(professor, key)) {
    const element = professor[key];
    console.log(`${key}: ${element}`);
  }
}
