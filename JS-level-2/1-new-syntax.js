

//-----------------------------------------------------------

// arry - de-structuring

// let arr = [1, 2, 3, 4, [5, 6]];

// manual
// let n1 = arr[0];
// let n2 = arr[1];
// let n3 = arr[2];
// let n5 = arr[4][0];

// automatic
// let [n1, n2, n3, n4 = 0, [n5, n6]] = arr;

// let n1, n2;
// [n1, n2] = arr;


// object - de-structuring

// let person = {
//     name: 'Nag',
//     age: 34
// };

// manual
// let myName = person.name;
// let myAge = person.age;

// automatic
// let { name: myName, age: myAge } = person;

// let { name: name, age: age } = person;
// or
// let { name, age } = person;

// let myName;
// let myAge;
// ({ name: myName, age: myAge } = person);



//-----------------------------------------------------------

// e. obj-literal enhancements

// let name = "Nag";
// let age = 34;

// let dynamicProperty = "office"; // office | vacation

// // es5
// let person1 = {
//     name: name,
//     age: age,
//     'home-address': 'chennai',
//     sayName: function () {
//         //..
//     }
// }

// // es6
// let person2 = {
//     name,
//     age,
//     [dynamicProperty + "-address"]: '.....',
//     sayName() {
//         //...
//     },
//     ['say Age']() {

//     },
//     [1 + 2 + 3]() {
//         console.log('im six');
//     }
// };

// person2['6']();

//-----------------------------------------------------------

// e. spread operator

// function f1(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// let nums = [10, 20, 30];

// // manual :
// f1(nums[0], nums[1], nums[2]);

// // automatic
// f1(...nums);

// let a1 = [1, 2, 3];
// let a2 = [7, 8, 9];
// let a3 = [...a1, 4, 5, 6, ...a2,...'ABC'];


//-----------------------------------------------------------

// symols & iterable objects  & for-of loop


// let javaSymbol = Symbol.for('java');
// let jsSymbol = Symbol.for('js');

// let e1 = { name: 'Nag', [javaSymbol]: 'java,spring,....' }
// let e2 = { name: 'IBM', [jsSymbol]: 'js,react,....' }



// let arr = ['idly', 'bonda', 'poori'];

// let [m1, m2, m3] = arr;
// let newMenu = [...arr, 'biryani'];
// for(let item of newMenu){
//     console.log(item);
// }


// let idMaker = {
//     [Symbol.iterator]: function () {
//         let id = 0;
//         return {
//             next: function () {
//                 ++id;
//                 return { value: id <= 10 ? id : undefined, done: id <= 10 ? false : true }
//             }
//         }
//     }
// };


// let ids = [...idMaker];
// let [id1, id2, id3] = idMaker;
// for(let id of idMaker){
//     console.log(id);
// }


//-----------------------------------------------------------


// Es5
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName = function () {
//     console.log('im ' + this.name);
// }
// Person.prototype.sayAge = function () {
//     console.log('im ' + this.age + " old");
// }

// es6

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         console.log('Person::constructor()');
//     }
//     sayName() {
//         console.log('im ' + this.name);
//     }
//     sayAge() {
//         console.log('im ' + this.age + " old");
//     }
// }
// // let p1 = new Person('Nag', 34);
// class Employee extends Person {
//     constructor(name, age, salary) {
//         super(name, age);
//         this.salary = salary;
//         console.log('Employee::constructor()');
//     }
//     getBonus() {
//         return this.salary * 0.02;
//     }
// }
// // let e = new Employee('Nag', 34, 1000.00);

// class Boss extends Employee {
//     getBonus() {
//         return this.salary * 0.2 + super.getBonus();
//     }
// }

// let boss = new Boss('Nag', 34, 1000.00);


// class Abc{
//     static staMethod(){
//         //...
//     }
// }
// Abc.staVar=123; // static var..


//-----------------------------------------------------------


// arrow-function


// let getPrice = function () {
//     return 100 + 200;
// }


// using arrow-function

// let getPrice = () => {
//     return 100 + 200;
// }
// let getPrice = () => 100 + 200;
// let getPrice = (count) => count * (100 + 200);
// let getPrice = count => count * (100 + 200);
// let getPrice = (count, gst) => count * (100 + 200) + gst;
// let getPrice = (count, gst) => {
//     let cost = count * (100 + 200);
//     let total = cost + gst;
//     return total;
// };


/*

     why/where we need arrow-function ?

     ==> to make compact function-arg
     ==> to capture 'this'

*/

//------------------------------------------------------

// ==> to make compact function-arg


// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// nums.sort(function (a, b) { return a - b; });
// nums.sort((a, b) => a - b);

//------------------------------------------------------

// ==> to capture 'this'

/*
    
by default , regular function(s)

    ==> bound to global-object
    // or
    ==> we can bind to any-object dynamically

*/

let tnr = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " teaching .js");
        // let askQues = function (q) {
        //     console.log(this.name + " answering " + q);
        // }
        // or
        let askQues = (q) => {
            console.log(this.name + " answering " + q);
        }
        console.log(this.name + " teaching .js - ends");
        return askQues;
    }
}

let askQues = tnr.doTeach();
askQues('Q1');
let newTnr = { name: 'Praveen' }
askQues.call(newTnr, "Q2");