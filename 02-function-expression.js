console.log("%c***** Function Expression *****", "color: purple");
var add = function () {
  console.log("Inside Function expressions.........");
};
add();

var add = function (n1, n2) {
  console.log(`Addition is: %c${n1 + n2}`, "color: green");
};
add(10, 20);

var add = function (n1, n2) {
  var result = n1 + n2;
  return result;
};
var result = add(176, 765);
console.log(`Addition is: %c${result}`, "color: green");

var result = add(3423, 7644);
console.log(`Addition is: %c${result}`, "color: green");
