

// parctical use of generator(s)


// let fetch = require('node-fetch');
// let apiUrl = 'http://localhost:8080/api/products/5a50a1ef06f3da38787067aa';

//---------------------------------------------------
// fetch(apiUrl)
//     .then(resp => resp.json())
//     .then(body => body.name)
//     .then(name => console.log("Name -" + name))

//---------------------------------------------------

function* loadProductName() {
    const resp = yield fetch(apiUrl)
    const body = yield resp.json();
    const name = body.name;
    console.log("Name : " + name); // DISPACTH ACTION
}

//---------------------------------------------------

const it = loadProductName();
const iteration = it.next();
const promise1 = iteration.value;
promise1.then(resp => {
    const anotherIteration = it.next(resp);
    const promise2 = anotherIteration.value;
    promise2.then(body => {
        it.next(body);
    });
})

//--------------------------------------------------


// function* foo() {
//     console.log('start...');
//     let x = yield "give me x value";
//     console.log(x);
//     let y = yield "give me y value";
//     console.log(y);
//     let z = yield "give me z value";
//     console.log(z);
//     return x + y + z;
// }

// function* gen() {
//     let idx = 0;
//     while (true) {
//         idx++;
//         if (idx == 3) return 0;
//         yield idx;
//     }
// }


