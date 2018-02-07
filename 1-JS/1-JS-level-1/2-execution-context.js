

/*

 execution-context / scope
 --------------------------

 ==> memory/stack-frame with given args & locals 
     to execute instructions

     2 phases
     --------

     a. creation-phase / push
         -> all variables declared with 'var' keyword 
            will get hoisted with default value ( undefined)
     b. execution-phase / pop
         -> instructins will get execute seq.
         
    ------------------------------------------------
    
    ==> by default , every .js-runtime has 1 global-context
    ==> every context must be executed by an object ( this )
    ==> global-context always executed by 'global-object'

    global-object  / js activation-object

    browser-envi ==> window
    Node.js      ==> process
    ..

    ==> every function-invocation creates new-context, 
        which is child of in-which that function has declared
    ----------------------------------------------------
    

*/


// var v=12;
// console.log(v);

// ----------------------------------------------------

// var v=12;
// function f1(){
//     console.log(v)
//     var v=13;
// }
// f1(); // f1-context  <=== global-context

// ----------------------------------------------------

// Quiz


// var v = 12;
// function f1() {
//     function f2() {
//         console.log(v);
//     }
//     f2(); // f2-context  <=== f1-context
//     var v = 13;
// }
// f1(); // f1-context  <== global-context


// ----------------------------------------------------

// var v = 100;
// var v = 200;

// ----------------------------------------------------

// var v = 100;
// if (true) {
//     var v = 200;
// }
// console.log(v);

// ----------------------------------------------------

/*

    problems with 'var' keyword :

    ==> variable always get hoist
    ==> can re-declare sample variable within context/block
    ==> no block-scope

    soln:

    ==> using 'let' & 'const' keywords ( from Es6 ) 

*/

// console.log(v);
// let v=12;


// ----------------------------------------------------


// let v=100;
// var v=200;

// ----------------------------------------------------

// var v = 100;
// if (true) {
//     let v = 200;
// }
// console.log(v);


// ----------------------------------------------------

// const trainer={
//     name:'Nag'
// };

// // trainer=null;
// trainer.name="Nag N";


// ----------------------------------------------------

// final Note

/*
    let  ==> mutable reference variables
    const ==> immutable reference variable
*/

// ----------------------------------------------------