"use strict";

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`${this.firstName} : ${this.course}`);
// };

// const mike = new Student("Mike", 2020, "CS");
// console.dir(Student.prototype.constructor);

// Person.prototype.species = "Homo sapiens";
// const me = new Person("Tanmay", 1996);

// console.log(me);

// const arr = [1, 2, 3, 4, 5, 6];

// class Person {
//   constructor(fullName, birthYear) {
//     this._fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// class Student extends Person {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log("hello");
//   }

//   calcAge() {
//     console.log("age");
//   }
// }

// const nikunj = new Student("Nikunj Patel", 2000, "CS");
// nikunj.calcAge();

// const me = new Person("Doe", 1211);

// // me.calcAge();

// // me.greet();
// console.log(me);

// const account = {
//   owner: "Doe",
//   _movements: [200, 333, 424],

//   get latest() {
//     return this._movements.pop();
//   },
//   set latest(mov) {
//     this.latest._movements.push(mov);
//   },
// };

// console.log(account.latest);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthday);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const tanmay = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`${this.firstName} : ${this.course}`);
// };

// const jey = Object.create(StudentProto);

// jey.init("Jey", 2022, "CS");

class Account {
  // 1) public fields
  locale = navigator.language;

  // 2) private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //3) Public methods
  // public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved!`);
      return this;
    }
  }
  // 4) Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Tanmay", "RS", 1111);

acc1.deposit(250);
acc1.withdraw(140);

console.log(acc1);
