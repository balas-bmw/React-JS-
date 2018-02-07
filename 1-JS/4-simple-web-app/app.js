
// document.addEventListener('DOMContentLoaded', function (e) {
//     // using DOM API
//     let box = document.querySelector('.alert-info');
//     let showBtn = document.querySelector('.btn-primary');
//     let hideBtn = document.querySelector('.btn-danger');

//     hideBtn.addEventListener('click', function (e) {
//         box.style.display = 'none';
//     });
//     showBtn.addEventListener('click', function (e) {
//         box.style.display = '';
//     });
// });

//----------------------------------------------------------------



// stack

// #1

// function foo(b) {
//     var a = 10;
//     return a + b + 11;
// }

// function bar(x) {
//     var y = 3;
//     return foo(x * y);
// }

// console.log(bar(7)); //returns 42


// // #2

// function foo(){}
// function bar(){foo()}
// function baz(){bar()}
// baz();


// // #3
// function foo() { throw new Error('oops') }
// function bar() { foo() }
// function baz() { bar() }
// baz();

// #4

// function foo(){foo()}
// foo();

// #5


// function longRunning(){
//     var i=0;
//     while(i<5){
//         console.log('im hungry....');
//         i++;
//     }
// }

// function shortRunning(){
//     console.log('short...');
// }

// longRunning();
// shortRunning();


//-----------------------------------------------------------------


/*

    <button class="veg"> Veg </button>
    <button class="non-veg"> Non-Veg </button>

*/


// console.log('start...');
// $.on('.veg','click',function vegHandler(e){
//     console.log('handling event on veg elements');
// });
// $.on('.non-veg','click',function nonVegHandler(e){
//     console.log('handling event on non-veg elements');
// });
// console.log('cont.. with other work...');

// function longRunning(){
//     var i=0;
//     while(i<5){
//         console.log('im hungry....');
//         i++;
//     }
// }
// longRunning();



// # 5

console.log('start...');

// IO ( AJAX call, read browser's local storage...)
setTimeout(function callback(){
    console.log('handle IO outcome');
},1000);

console.log('cont..with other work..');

function longRunning(){
    var i=0;
    while(i<5){
        console.log('im hungry....');
        i++;
    }
}
longRunning();




