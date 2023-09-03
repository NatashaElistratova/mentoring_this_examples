"use strict";

const obj = {
    prop: 'Test',
    objMethod() {
        console.log(this.prop);
    }
}

// obj.objMethod();

// Example 1
function sayHi() {
  console.log( this.name );
}

let user = { name: "John" };
let admin = { name: "Admin" };

// user['f'] = sayHi;
user.f = sayHi;
admin.f = sayHi;

// user.f(); 
// admin.f();

// Example 2
class Person {
    constructor(name) {
        this.name = name
    }
    showName() {
        console.log(this.name)
    }
}

const member = new Person("John")
const member2 = new Person("Ivan")
// member.showName()
// member2.showName()

// Example 3
const name = 'Vasya';

function test() {
    console.log(this.name);
}

// test(); 

// Example 4
let user = {
    firstName: "Ivan",
    sayHi() {
        let arrow = () => {
            console.log(this.firstName);
        };
        arrow();
    },
};

// user.sayHi(); 

let user1 = {
    firstName: "Ivan",
    sayHi() {
        function arrow() {
            console.log(this);
            console.log(this.firstName);
        };
        arrow();
    },
};

// user1.sayHi();

// Example 5
const object = {
    message: 'Hello, World!',
    getMessage() {
      const message = 'Test';
      return message;
    }
  };

// console.log(object.getMessage());

// Example 6
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

const test = obj1.prop.getFullname;

// console.log(test());

