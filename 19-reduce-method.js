const array = [2, 3, 1, 5, 4]; // 15

const sum = array.reduce((runningTotal, element) => {
  return runningTotal + element;
}, 25);

console.log(sum);
