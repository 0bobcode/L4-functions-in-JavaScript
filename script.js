let addRes = document.getElementById("add-r")
let subRes = document.getElementById("sub-r")
let divRes = document.getElementById("div-r")
let mulRes = document.getElementById("mul-r")
const divisor = 2

// function decleration without parameters
function withoutParameters() {
    console.log("im a little funcction with no parmater")
}
//function call with no arguments
withoutParameters()

//function decleration with  parameaters
function add(number1, number2) {
    // console.log(number1+number2)
    let result = number1 + number2;
    addRes.innerHTML = result
}


// function call with arguments 
// add(4,7)


// function expression
let subtract = function (n1, n2) {
    // creating variables insie the function
    let result = n1 - n2
    subRes.innerHTML=result
    // using return
    // return result

}
// call function expression
// console.log(subtract(9,4.99999999999))

//cannot access resulsut beacuase the scope of the result varible is limeted to subtract function
// console.log(result)

let division = function (divident) {
    let result = divident / divisor
    divRes.innerHTML=result
    // return result

}
// console.log(division(897386))


// create a function expression for multiplication
let multiply = function (numb1, numb2) {
    console.log(numb1 * numb2)
    let result = numb1 * numb2
    mulRes.innerHTML=result
    // return result
}
//function call for multiplacation
// multiply(8,7)

