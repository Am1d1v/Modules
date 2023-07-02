


/*  IIFE Example

const app = {};


(function(){

    function add(f, s){
        return f + s;
    }
    
    function sub(f, s){
        return f - s;
    }

    app.calc = {
        add,
        sub
    }
})()

*/

//===========================================================


    function add(f,s){
        return f + s;
    }

    function sub(f,s){
        return f - s;
    }

module.exports = {add, sub};    