
/*

    closure:
    ----------
    A closure is a function having access to the parent scope,
    even after the parent function has closed.

    why/where we need closures?

    => to abstract public-behav ( closures ) of any module 
    => when func executes async, to access parent-scoped data.

*/

// function teach(sub) {
//     console.log(`teaching ${sub}`)
//     let notes = `${sub}-notes`;
//     let fun = 'bla bla';
//     let learn = function () {
//         console.log(`learning with ${notes}`);
//     }
//     // learn();
//     console.log('teach end...');
//     return learn;
// }

// let learnFunc = teach('.js');  // teact context created with arg & local

// learnFunc();
// learnFunc();


//-------------------------------------------------

// => to abstract public-behav ( closures ) of any module 


/*

    e.g counter module

*/

// pattern : self- executable function / IIFE

// var counter = (function (v) {
//     var count = v; // private
//     // public 
//     function doCount() {
//         count++;
//     }
//     function getCount() {
//         return count;
//     }
//     return {
//         inc: doCount,
//         get: getCount
//     };
// })(100);
