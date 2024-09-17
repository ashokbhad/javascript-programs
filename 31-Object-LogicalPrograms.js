console.log(
  `%c1. Write a JavaScript program to list the properties of a JavaScript object.`,
  "color: pink"
);

var student = {
  name: "Ashok Bhad",
  sclass: "VI",
  rollNo: 27,
};

var properties = Object.keys(student);
console.log(`%cThe object keys are: ${properties}`, "color:green");
console.log(
  `%c=======================================================================`,
  "color:yellow"
);
console.log(
  `%c2. WAP to delete the rollno property from the object.
Also print the object before or after deleting the property.`,
  "color: pink"
);

var student = {
  name: "Rohit Sharma",
  sclass: "VI",
  rollNo: 101,
};

console.log("%cBefore deleting rollNo:", "color:purple");
console.log(student);
delete student.rollNo;
console.log("%cAfter deleting rollNo:", "color:purple");
console.log(student);
console.log(
  `%c=======================================================================`,
  "color:yellow"
);
console.log(
  `%c3. Write a JS program to get the length of a JS object.`,
  "color:pink"
);

var car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  color: "blue",
};

function getObjectLength(obj) {
  return Object.keys(obj).length;
}

console.log(
  "%cLength of the car object: " + getObjectLength(car),
  "color: green"
);
console.log(
  `%c=======================================================================`,
  "color:yellow"
);
console.log(
  `%c4. How to get dynamic access to an object property in JavaScript ?
`,
  "color: pink"
);

var person = {
  name: "Ashok Bhad",
  age: "24",
  proffesion: "Developer",
};
var propertyName = "age";
console.log(`%c${person[propertyName]}`, "color: green");
console.log(
  `%c=======================================================================`,
  "color:yellow"
);
console.log(
  `%c5. How to modify an objects property in an array of objects in JavaScript?`,
  "color:pink"
);

var employees = [
  {
    id: 1,
    name: "Ashok Bhad",
    position: "Developer",
    salery: 50000,
  },
];

function updateEmployeeSalery(id, newSalery) {
  for (var i = 0; i < employees.length; i++) {
    if (employees[i].id === id) {
      employees[i].salery = newSalery;
      return;
    }
  }
}
updateEmployeeSalery(1, 60000);
console.table(employees);
console.log(
  `%c=======================================================================`,
  "color:yellow"
);
console.log(
  `%c6. How to get the last item of JavaScript object?
`,
  "color: pink"
);

var car = {
  male: "Toyata",
  model: "carmy",
  year: 2020,
  color: "blue",
};
// Using Objects.keys()
var keys = Object.keys(car);
var lastKey = keys[keys.length - 1];
console.log("Last property using keys:", lastKey, car[lastKey]);
console.log(
  `%c=======================================================================`,
  "color:yellow"
);
console.log(
  `%c6. How to get the last item of JavaScript object?`,
  "color: pink"
);

var car = {
  male: "Toyata",
  model: "carmy",
  year: 2020,
  color: "blue",
};
// Using Objects.entries()
var entries = Object.entries(car);
var lastEntry = entries[entries.length - 1];
console.log("Last property using entries:", lastEntry[0], lastEntry[1]);
console.log(
  `%c=======================================================================`,
  "color:yellow"
);
console.log(
  `%c7. How to use array that include and check an object against a property of an
object?`,
  "color:pink"
);

let students = [
  { id: 1, name: "Ashok Bhad", grade: "A" },
  { id: 2, name: "Bala Bhad", grade: "B" },
  { id: 3, name: "Akshay Bhad", grade: "C" },
];
function checkStudentsExists(id) {
  return students.filter((student) => student.id === id).length > 0;
}
console.log(checkStudentsExists(2));
console.log(checkStudentsExists(4));
console.log(
  `%c=======================================================================`,
  "color:yellow"
);
console.log(
  `%c8. How to add an object to an array in JavaScript?
`,
  "color: pink"
);
let fruits = ["apple", "banana", "orange"];
let newFruits = {
  name: "grape",
  color: "purple",
};
fruits.push(newFruits);
console.log(fruits);
console.log(
  `%c=======================================================================`,
  "color:yellow"
);
console.log(
  `%c9. How to remove duplicates from an array of objects using JavaScript?`,
  "color: pink"
);
let students1 = [
  { id: 1, name: "Ashok Bhad" },
  { id: 2, name: "Bala Bhad" },
  { id: 1, name: "Ashok Bhad" },
  { id: 3, name: "Akshay Bhad" },
  { id: 2, name: "Bala Bhad" },
];
function removeDuplicates(arr) {
  return arr.filter(
    (student, index, self) =>
      index ===
      self.findIndex((t) => t.id === student.id && t.name === student.name)
  );
}
let uniqueStudents = removeDuplicates(students1);
console.table(uniqueStudents);
console.log(
  `%c=======================================================================`,
  "color:yellow"
);

console.log(
  `%c10. How to get a subset of a javascript objects properties?
`,
  "color:pink"
);
let person1 = {
  firstName: "Ashok",
  lastName: "Bhad",
  age: 24,
  city: "Pune",
  country: "India",
};

let { firstName, lastName, country } = person1;
console.log(firstName, lastName, country);
