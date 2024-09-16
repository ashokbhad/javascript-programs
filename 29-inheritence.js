class Person {
  constructor(fullName, age, profession) {
    this.fullName = fullName;
    this.age = age;
    this.profession = profession;
  }
}
class Student extends Person {
  constructor(graduation, fullName, age, profession) {
    super(fullName, age, profession);
    this.graduation = graduation;
  }
}

const stdElon = new Student("BE CSC", "Elon Musk", 54, "student");
console.log(stdElon);
