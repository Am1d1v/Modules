


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


/*

    function add(f,s){
        return f + s;
    }

    function sub(f,s){
        return f - s;
    }

module.exports = {add, sub};    

*/

//===========================================================




export function add(f,s){
    return f + s;
}

export function sub(f,s){
    return f - s;
}

/*


setTimeout(()=>{
    add = function(f, s){
        return f * s;
    }
},1500);

*/

async function getProducts(){
    const res = await fetch('https://dummyjson.com/products');
    return res.json();
};

export const res = await getProducts();

