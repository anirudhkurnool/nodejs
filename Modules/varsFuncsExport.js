const PI = 3.14;
const E = 2.718;

function add(a, b) { return  a + b; }

function sub(a, b) { return a - b; }

function mul(a, b) { return a * b; }

function div(a, b) {
    if (b == 0){
        console.error("divide by zero error");
        throw err;
    } 

    return a / b;
}

// module.exports = add;
// module.exports = sub;
//if you do the above thing only sub gets export and add gets overwritten

//return a javascript object
module.exports = {
    PI, E, add, sub, mul, div
};