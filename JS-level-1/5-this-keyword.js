

/*

    this 

    ==> owner of execution-context/scope

*/

// Ques? why we need 'this' keyword ?

// let pName = "Global";

// let person = {
//     pName: 'Nag',
//     sayName: function () {
//         let pName = "Local";
//         console.log('im ' + pName);   // context's hierarchy data
//         console.log('im ' + person.pName); // obj's property
//         console.log('im ' + this.pName) // couurent context's owner data
//     }
// }
// // person.sayName();
// let p = person;
// person = { pName: 'Nirmal' };
// p.sayName();


//-------------------------------------------------------------


/*

    function-binding
    ------------------
    a. static
    b. dynamic

*/

//---------------------------------------------------------------

//  a. static function-binding

// let p1={name:'Nag',sayName:function(){console.log('im '+this.name);}}
// let p2={name:'Ria',sayName:function(){console.log('im '+this.name);}}

// function sayNameForAll() {
//     console.dir(this);
//     console.log('im ' + this.pName);
// }
// let p1 = { pName: 'Nag', sayName: sayNameForAll }
// let p2 = { pName: 'Ria', sayName: sayNameForAll }

// sayNameForAll(); // im ?? // function-invocation  ( this ==> global-object)
// p1.sayName(); // im Nag   // method-invocation    ( this ==> invoker-obj)
// p2.sayName(); // im Ria


//---------------------------------------------------------------

// b. dynamic function-binding


let greetLib = {
    name: 'GREET_LIB',
    sayName: function (message, from) {
        console.log(message + ' im ' + this.name + " : " + from);
    }
};
// greetLib.sayName();

let p = { name: 'Nag' };
let e = { name: 'IBM' };

// // way-1 : .call
// greetLib.sayName.call(p, "Hello", "Chennai");
// greetLib.sayName.call(e, "Hey", "Universe");


// way-2 : .apply
// greetLib.sayName.apply(p, ["Hello", "Chennai"]);
// greetLib.sayName.apply(e, ["Hey", "Universe"]);

// way-3 : .bind
// let personSayName = greetLib.sayName.bind(p, "Hello", "chennai");
// personSayName();
// personSayName();
// let empSayName=greetLib.sayName.bind(e);
// empSayName('hey',"hyd");
// empSayName('dude',"blr");


//--------------------------------------------------------------------



// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayName = function () {
//         console.log('im ' + this.name);
//     }
//     this.sayAge = function () {
//         console.log('im ' + this.age + " old");
//     }
// }

// var p1=new Person('Nag',34);
// var p2=new Person('Ria',3);





//--------------------------------------------------------------------



// in .js-lang we can invoke function in 4 ways

/*

    1. function invocation   ( this ==> global-obj )
    2. method invocation     ( this ==> invoker-obj )
    3. call/apply/bind invocation ( this ==> arg-obj)
    4. constructor invocation ( this ==> new-obj)

*/


//--------------------------------------------------------------------


// Quiz-1

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person('Abc',34);


//--------------------------------------------------------------------

// Quiz-2  ( closed for modification , open for extension )

// var trainer = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");
//         var self = this;
//         var doLearn = function () {
//             console.log(this.name + " learning .js from " + self.name);
//         }
//         // doLearn();
//         let emp = { name: 'IBM' };
//         doLearn.call(emp);
//     }
// };

// trainer.doTeach();
// let tempTrainer = { name: 'Praveen' };
// trainer.doTeach.call(tempTrainer);


//-----------------------------------------------------------



function sessionStart() {
    function Trainer(name) {
        this.name = name;
        this.doTeach = function () {
            console.log(this.name + " teaching .js");
            let self = this;
            let doLearn = function () {
                console.log(this.name + " learning .js from " + self.name);
            }
            return doLearn;
        }
    }
    function Employee(name) {
        this.name = name;
    }
    let tnr1 = new Trainer('Nag'); // constructor invocation
    let tnr2 = { name: 'Praveen' } // constructor invocation
    let e1 = new Employee('bala');
    let e2 = new Employee('jobin');
    let learn = tnr1.doTeach(); // method invocation
    // let learn = tnr1.doTeach.call(tnr2);
    learn.call(e1); // call/apply/bind invocation
    learn.call(e2);
}
sessionStart(); // function invocation

