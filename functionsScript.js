// function printVariables(value1,value2,value3)
// {
//     return [value1, value2, value3];
// }


//Assignment 1: 1d
function printVariables(value1 = 0,value2 = 0,value3 = 0)
{
    console.log(arguments); //Assignment 1: 1e
    //Assignment 1: 1f
    var localVar=3; 
    testingVar=5;
    
    
    return [value1, value2, value3];
}


// //Assignment 1: 2
// const functionExpression = function(value1 = 0,value2 = 0,value3 = 0)
// {
//     return [value1, value2, value3];
// };


//Assignment 2:
//Assignment 2: a
function sum(a = 0, b = 0){

    //Assignment 2: b
    a = parseInt(a);
    b = parseInt(b);

    if (isNaN(a) || isNaN(b)) {
        return "Error please enter valid nums";
    }
    return a+b;
}