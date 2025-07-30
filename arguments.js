

// arguments and deal with unknown number of arguments.

function addNumbars() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum = sum + element;
        
    }
    return sum;
}

let result = addNumbars(5 , 5);
console.log(result);