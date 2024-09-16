function sayHello(callbacks) {
  console.log("Hello...");
  callbacks();
  let tata = function () {
    console.log("Good Buy..");
  };
  return tata;
}
let greet = function () {
  console.log(`Good Evening...`);
};
let result = sayHello(greet);
result();

// sayHello(greet)();
