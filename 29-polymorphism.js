class Calculator {
  add(n1, n2 = 0) {
    console.log(`${n1 + n2}`);
  }
  //    add(n1, n2, n3 ){
  //     console.log(`${n1+n2 +n3}`);
  //    }
}
const cal = new Calculator();
cal.add(10, 20);
cal.add(10);

class Person {
  constructor(fullName, age, profession) {
    this.fullName = fullName;
    this.age = age;
    this.profession = profession;
  }
  earning() {
    console.log(`Person Earning`);
  }
}

class Student extends Person {
  constructor(graduation, fullName, age, profession) {
    super(fullName, age, profession);
    this.graduation = graduation;
  }

  earning() {
    console.log(`Student Earning: 10K`);
  }
}
const stdElon = new Student("BE CSC", "Elon Musk", 54, "student");
console.log(stdElon);
stdElon.earning();
