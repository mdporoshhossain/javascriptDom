


// When to use a function, use function inside a loop.

function addFunction(element) {
    
    if (element % 2 == 0) {
         return element +' : '+  "is even Nambar";
    }
    else{
        return element +' : '+  "is odd Nambar";
    }
}

let result = addFunction(35);

console.log("Result" , result);


// function addFunctionAll(addNumbars) {
//     for (let i = 0; i < addNumbars.length; i++) {
//         const element = addNumbars[i];
//         addFunction(element);
        
//     }
// }



// let numbars = [3,4,55,6,7,8,9,88];
// addFunctionAll(numbars);

// let addNumbars = [22,33,44,32,45,55,65,66,77,67,76,87,78,99];
// addFunctionAll(addNumbars);
