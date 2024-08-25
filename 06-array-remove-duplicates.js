const arrayNum = [11, 3, 4, 11, 4, 7, 3];
const uniqueArray = [];

// Loop through each element in the original array
for (let i = 0; i < arrayNum.length; i++) {
  let isDuplicate = false;

  // Check if the element is already in the uniqueArray
  for (let j = 0; j < uniqueArray.length; j++) {
    if (arrayNum[i] === uniqueArray[j]) {
      isDuplicate = true;
      break;
    }
  }

  // If the element is not a duplicate, add it to the uniqueArray
  if (!isDuplicate) {
    uniqueArray.push(arrayNum[i]);
  }
}
console.log(`%c *** Array Remove Duplicates ***`, "color: green");
console.log(uniqueArray); // Output: [11, 3, 4, 7]

// console.log(`%c*** Short Way To Sort Out ***`, "color: purple");

// const arrayNum = [11, 3, 4, 11, 4, 7, 3];
// const uniqueArray = [];

// for (let i = 0; i < arrayNum.length; i++) {
//   if (!uniqueArray.includes(arrayNum[i])) {
//     uniqueArray.push(arrayNum[i]);
//   }
// }
// console.log(`%c *** Array Remove Duplicates ***`, "color: green");
// console.log(uniqueArray); // Output: [11, 3, 4, 7]
