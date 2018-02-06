
"use strict"

/*

    obj <--------- obj ( prototype )

*/

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     // this.sayName = function () {
//     //     console.log('im ' + this.name);
//     // }
//     // this.sayAge = function () {
//     //     console.log('im ' + this.age + " old");
//     // }
// }
// Person.prototype.sayName = function () {
//     console.log('im ' + this.name);
// }
// Person.prototype.sayAge = function () {
//     console.log('im ' + this.age + " old");
// }


// var p1 = new Person('Nag', 34);
// var p2 = new Person('Ria', 3);


// var o = { x: 1, y: 2 }
// var c = Object.create(o);

// var o1 = { a: 10 };
// var o2 = { b: 20 };
// Object.setPrototypeOf(o2,o1);


//----------------------------------------------------------------




// //-----------------------------------------------

// var menu = ['idly', 'vada'];
// menu.push('porri');

// //-----------------------------------------------

// // Array.prototype.push = "";

// //-----------------------------------------------

// menu.push('biryani');

// //-----------------------------------------------

// object constraints

// let person = {
//     name: 'Nag',
//     age: 34
// };
// Object.defineProperty(person, 'name', { configurable: false, writable: false, enumerable: false })

// // delete person.name;
// // person.name = "";

// for (let p in person) {
//     console.log(p);
// }

//------------------------------------------------------

// let person = {
//     name: 'Nag',
//     age: 34
// };

// Object.preventExtensions(person);
// Object.seal(person);
// Object.freeze(person);

// person.bla = "bla";
// delete person.age;
// person.age = 0;

//------------------------------------------------------


// let person = {
//     _name: 'Nag',  // data property
//     _age: 34,
//     set name(name) {  // accessor propeerties
//         if (name) {
//             this._name = name;
//         }
//     },
//     get name() {
//         return this.name
//     }
// };

// person.name = ""; // set
// console.log(person.name);