//Normal Function

function num(){
    return 10;
}

console.log(num());

//Es6 fat arrow function

let num2 = ()=> 10;
console.log(num2());

// Parameter Passing

let sum = ( a, b) => {
    var result = a + b;
    return result;
}

console.log(sum(5,4));