

//const a = 1;


/*  IIFE Example

(function(){

    console.log(app.calc.add(1,3));
    console.log(app.calc.sub(1,3));

})();

*/

//===========================================================


/*

const {add, sub} = require('./calc.js');

    console.log(add(1,3));
    console.log(sub(1,3));


*/

//===========================================================


import {add, sub} from './calc.js';

console.log(add(1,3));
console.log(sub(1,3));