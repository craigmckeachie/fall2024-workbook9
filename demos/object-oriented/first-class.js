"use strict";

class Person {

  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  
}

let person = new Person("Freddie", "Gibbs");

let anotherPerson = new Person("Fred", "Flintstone");

console.log(person);
console.log(anotherPerson);
