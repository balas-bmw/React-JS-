

/*

  FP principles
  ---------------

  => A function can be stored in a variable or value
  => A parameter of a function can be a function
  => The return value of a function can be a function
  => closures

  -----------------------------------------------------

  how to create function .js-lang ?

   2-ways

   1. function declaration

        ==> Named function
        ==> function-object created context-creation phase
        ==> function-obj always get hoist

        when to use ?
        ==> to keep function always in context
    
   2. function expression

        ==> anonymous function
        ==>function-object created context-execution phase

         when to use ?
        ==> on input/condition to creation function
    
  

*/

//--------------------------------------------------------
// 1. function declaration

// console.log(add(12,13));
// function add(n1,n2){
//     return n1+n2;
// }
// console.log(add(12,13));
//--------------------------------------------------------

// 2. function expression

// console.log(add(12,13));  // error
// let add=function(n1,n2){
//     return n1+n2;
// }
// console.log(add(12,13));
//--------------------------------------------------------

// let userType;
// let action;
// function login() {
//     userType = "admin" //  "member"
// }
// login();
// if (userType === "admin") {
//     action = function () {
//         console.log('Admin...action');
//     }
// } else {
//     action = function () {
//         console.log('Member...action');
//     }
// }

// action();

//--------------------------------------------------------

// #1 - A function can be stored in a variable or value

// function greet() {
//     console.log('Hello...');
// }

// let sayHello = greet;
// sayHello();

//--------------------------------------------------------

// #2 - A parameter of a function can be a function

// function greet(f) {
//     if (f) {
//         f();
//         return;
//     };
//     console.log('Hello..');
// }
// greet();
// greet(function () { console.log('Ola..'); });

// e.g

// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// nums.sort();
// nums.sort(function (a, b) { return a - b; });
// nums.sort(function (a, b) { return b - a; });

//--------------------------------------------------------


// #- The return value of a function can be a function

// function teach() {
//     console.log('teach....');
//     let learn = function () {
//         console.log('learn...');
//     }
//     return learn;
// }

// // teach()();
// let learn=teach();
// learn();

//--------------------------------------------------------

// function reflect(a,b,c,d,e){
//     console.dir(arguments);
//     return arguments[0];
// }
// console.log(reflect());

//--------------------------------------------------------


// function getFood(){
//     return "No Food";
// }
// let getFood=new Function()

// function getFood(pay){
//     if(arguments.length===0){
//         return "No Food";
//     }
//     return "Biryani";
// }

// getFood=new Function()
// console.log(getFood());

//--------------------------------------------------------

// ES6  

// a. function with default params


// function f1(a = 1, b = 2) {

//     // if (!a) {
//     //     a = 1;
//     // }
//     // if (!b) {
//     //     b = 2;
//     // }

//     // a = a || 1;
//     // b = b || 2;

//     console.log(a);
//     console.log(b);
// }
// f1(undefined, 20);



// a. function with rest param

// function f1(a, b, ...remaining) {
//     console.log(a);
//     console.log(b);
//     console.log(Array.isArray(remaining));
//     console.dir(remaining);
// }

// f1(12, 13, 14, 15, 16, 17)


//--------------------------------------------------------











