const divisor = 2

// function decleration without parameters
function withoutParameters(){
    console.log("im a little funcction with no parmater")
}
//function call with no arguments
withoutParameters()

//function decleration with  parameaters
function add(number1,number2){
    console.log(number1+number2)
}


// function call with arguments 
add(4,7)


// function expression
let subtract = function(n1,n2){
    // creating variables insie the function
    let result = n1-n2

    // using return
    return result
    
}
// call function expression
console.log(subtract(9,4.99999999999))

//cannot access resulsut beacuase the scope of the result varible is limeted to subtract function
// console.log(result)

let division = function(divident){
    let result = divident / divisor
    return result

}
console.log(division(897386))


// create a function expression for multiplication