/* eslint-disable */

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person = new Person('John', 'Doe');

Person.prototype.getName = function () {
  return `${this.firstName} ${this.lastName}`;
};


Object.defineProperty(Person.prototype, 'name', {
  get: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  set: function (name) {
    this.firstName = name.split(' ')[0];
    this.lastName = name.split(' ')[1];
   

  }
});

console.log(person.name);
