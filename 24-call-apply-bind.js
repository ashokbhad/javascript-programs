const person = {
  fullName: "Bill Gates",
  company: "Microsoft",
};
function greetings(message, role) {
  console.log(`${this.fullName}, ${message}, ${role}`);
}
// greetings.call(person, "Good Morning", "Tech Lead");

// greetings.apply(person, ["Good Morning", "Tech Lead"])

let newGreetings = greetings.bind(person);
newGreetings("Good Morning", "Tech Lead");
