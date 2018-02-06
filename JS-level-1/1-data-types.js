

/*

    data-types

    1. simple / primitives ==> values
        a. string
        b. number
        c. boolean
        d. undefined
    2. complex/ reference  ==> objects

*/

//--------------------------------------------
// 1. simple / primitives ==> values
//--------------------------------------------

//a. string
var name = "Nag";
var selection = 'abc';
var dynamicString = "the trainer - " + name;
var dynamicString2 = `the trainer - ${`Mr.${name}`} - ${30 + 3}` // ES6 - string interpolation
var htmlTemplate = `
    <div>
        <h1>${name}</h1> 
    </div>    
`
//--------------------------------------------

//b. number

var count = 12;
var cost = 12.12;

//--------------------------------------------
// c. boolean

var found = true;

/*
    imp-note:
    falsy values ==> false,0,"",null,undefined,NAN
    ref : https://dorey.github.io/JavaScript-Equality-Table/
*/

//--------------------------------------------

// d. undefined

var v;


//--------------------------------------------



//--------------------------------------------
// 1. complex / reference ==> objects
//--------------------------------------------

/*

    syntax to create object

        var ref=new Constructor();

    imp-note:
    by default , all .js-objects are extensible, configurable
*/

var config = new Object();
config.url = "http://"
config.httpMethod = "GET";
config.success = function () {
    //..
    console.log('executed on success');
}

delete config.httpMethod;

//--------------------------------------------

// literal-style objects  ( if object created without 'new' keyword )

// a. Object  ==> obj wrapper

var config = new Object();
config.url = "http://"
config.httpMethod = "GET";
config.success = function () {
    //..
    console.log('executed on success');
}

// or  ( literal style )

var config = {
    url: 'http://',
    httpMethod: 'GET',
    success: function () {

    }
};

//--------------------------------------------

// b. Array

var arr = new Array();
// or
var arr = [];

//--------------------------------------------

// c. RegExp

var re = new RegExp('\\d{4}-\\d{4}-\\d{4}');

// or

var re=/\d{4}-\d{4}-\d{4}/;

//--------------------------------------------

// d. Function

// var add=new Function('n1','n2','var result=n1+n2;return result;')

// or

function add(n1,n2){
    var result=n1+n2;
    return result;
}

//--------------------------------------------

// in react , we create component instances  following

/*
    var comp1=<ComponentClass /> ==> new Constructor()
*/

//--------------------------------------------


// Quiz , how to access obj's properties


var person={
    name:'Nag',
    'full-name':'Nag N'
};

console.log(person.name);
console.log(person['name']);

console.log(person['full-name']);