'use strict'
const message = 'Привет,';
const person = {
  id: 0,
  firstName: "Вася",
  lastName: "Иванов"
};

function func(message, arg2) {
  console.log(`${message} ${this.firstName} ${arg2}`);
}

func.call(person, message, 2); 
func.apply(person, [message, 2]);

let funcPerson = func.bind(person);
funcPerson(message, 3); 

// Частичный вызов
function sum(a, b) {
  return a + b;
}

const sum2 = sum.bind(null, 2)
console.log(sum2(2)) // 4
console.log(sum2(6)) // 8