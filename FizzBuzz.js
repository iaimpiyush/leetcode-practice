var fizzbuzz = function(n) {

    const arraytoStore = []
    for(let i =1; i<=n; i++){

        let str = ""
        if(i%3 === 0) str += "Fizz" 
        if(i%5 === 0) str += "Buzz" 
        arraytoStore.push(str || i.toString())
    }
    return arraytoStore
}
const arraytoStore = fizzbuzz(100)
console.log(arraytoStore)




// 1st Method of FizzBuzz Solution
var fizzBuzz = function(inputNumber) {
    // validation
    if(!Number.isInteger(inputNumber) || inputNumber <= 0){
        throw new Error("isnputNumber must be  positive integer")
    }
    const result = []
    for(let i=1; i<=inputNumber; i++){
        if(i%3 === 0 && i%5 === 0){
            // console.log(i, "FizzBuzz")
            result.push("FizzBuzz")
        }
        else if(i%3 === 0){
            // console.log(i, "Fizz")   
            result.push("Fizz")   
        }
        else if(i%5 === 0){
            // console.log(i, "Buzz")   
            result.push("Buzz")   
        }
        else {
            // console.log(i, i.toString())   
            result.push(i.toString())   
        }
    }
    return result;
}
const result = fizzBuzz(10)
console.log(result)




// 2nd Method of FizzBuzz Solution
var fizzBuzz2 = function(inputNumber) {
    // validation
    if(!Number.isInteger(inputNumber) || inputNumber <= 0){
        throw new Error("isnputNumber must be  positive integer")
    }
    const answer = []
    for (let i=1; i<=inputNumber; i++){

        let output = ""
        if(i%3 === 0){
            output += "Fizz"
        }
        if(i%5 === 0){
            output += "Buzz"
        }
        answer.push(output || i.toString())
    }
    return answer;
}
const answer = fizzBuzz2(15)
console.log(answer)



// 3rd Method of FizzBuzz Solution
var fizzBuzz2 = function(n) {

    const arrayVal = []
    for(let i =1; i<=n; i++){

        let str = ""
        if(i%3 === 0) str += "Fizz" 
        if(i%5 === 0) str += "Buzz" 
        arrayVal.push(str || i.toString())
    }
    return arrayVal
}
const arrayVal = fizzBuzz2(9)
console.log(arrayVal)