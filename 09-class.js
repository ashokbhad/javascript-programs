class Student {
  //Constructor: Special method used to initialize an object
  constructor(fullName, graduation, collegeName, city) {
    this.fullName = fullName;
    this.graduation = graduation;
    this.collegeName = collegeName;
    this.city = city;
  }
  //Member Function
  display() {
    console.log(
      `Student Details -> Full Name ${this.fullName}, Graduation: ${this.graduation}, College Name: ${this.collegeName}, City: ${this.city}`
    );
  }
}

const std1 = new Student("Sid Gates", 2024, "Clg-one", "Pune");
std1.display();

const std2 = new Student("Jenny Many", 2023, "Clg-two", "Mumbai");
std2.display();

const std3 = new Student("Elon Musk", 2019, "C.O.E.P", "LA");
std3.display();
