'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function () {
    console.log(this.name);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = ['Kabul', 'Bamyan', 'Bamyan', 'Herat'];
// const [a, b, c] = arr;
// console.log(a, b, c);

// const mySet = new Set(...arr);
// mySet.add('Mazar');
// console.log(mySet);
// We create a class for each node within the stack

// console.log(String.fromCharCode(66));

//search a string in a string
// console.log(flights.includes('_delayed_departure'));

//slice method
// console.log(flights.slice(0, 10));
// let sentence = 'Learning JavaScript is fun!';
// let extracted = sentence.slice(9, -5);

// console.log(extracted);
// let str = 'JavaScript';
// let objStr = new String('JavaScript');
// console.log(str.length === objStr.length);

// const binary = 9;
// console.log(binary.toString(16));

// const fruit = new Set(['Apple', 'Banana', 'Berreis']);
// console.log(fruit.toString());

// const person = {
//   name: 'John',
//   age: 30,
//   children: {
//     first: 'Hamid',
//     second: 'Ahmad',
//   },
//   isStudent: true,
// };

// console.log(JSON.stringify(person));

// const calcAge = dob => {
//   return 2026 - dob;
// };
// console.log(calcAge(1999));

// //Global variable vs function scopped variable
// let x = 10;

// function printX() {
//   let x = 20;
//   console.log(x);
// }

// printX();
// console.log(x);
// if (true) {
//   let blockVar = 'Hello';
// }
// console.log(blockVar);

// console.log(3 / 0);
// console.log(Math.floor(Math.random() * 10));

// const array = ['hello', 'world'];
// console.log(array.toString());
