// 'use strict'
// Example 1
function showThis() {
    console.log(this);
}

const obj = {
    prop: 'Test',
    objMethod() {
        console.log(this.prop);
    }
}

obj.showThis = showThis
// obj.showThis() // obj
// showThis() // window

// Example 2
const name1 = 'Vasya';

function test() {
    console.log(this.name1);
}

// test(); // undefined


// Example 3
const object = {
    message: 'Hello, World!',
    getMessage() {
      message = 'Test'; // так не делать!
      return this.message;
    }
  };

// console.log(object.getMessage());


// Example 4
const fullname = 'John Doe';
const obj1 = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname() {
         return this.fullname;
      }
   }
};

// console.log(obj1.prop.getFullname());

const test1 = obj1.prop.getFullname;

// console.log(test1());


// Example 5
function makeUser() {
    return {
      firstName: "John",
      ref: this
    };
  }
  
let user = makeUser();

// console.log( user.ref.firstName );


// Example 6
function Person(name) {
    this.name = name;

    this.showName = () => {
        console.log(this.name)
    }
}

const member = new Person("John")
const member2 = new Person("Ivan")
// member.showName()
// member2.showName()

