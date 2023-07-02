


//const a = 1;

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



