var isPalindrome = (n) => {
    let copy = n
    let reversed = 0
    if (n<0) return false
    
    while(n>0){
        let remainder = n % 10
        reversed = (10*reversed) + remainder
        n = Math.floor(n/10)
    }
    return reversed === copy 
}
console.log(999, isPalindrome(999))
console.log(-121, isPalindrome(-121))



// is palindrome without converting it to the string
var isPalindrome1 = (inputNumber) => {
    if(inputNumber<0) return false
    if(inputNumber<10) return true
    
    
    let reversedNumber = 0
    let digitsleft = inputNumber
    
    while(digitsleft > 0){
        const lastdigit = digitsleft % 10
        digitsleft = Math.floor(digitsleft/10)

        reversedNumber = reversedNumber * 10 + lastdigit
    }
    
    // console.log("\nReversed Number: ", inputNumber, reversedNumber)
    
    return inputNumber === reversedNumber
}
// console.log(100000000000, isPalindrome1(100000000000))
// console.log(-121, isPalindrome1(-121))




// palindrome for the string
var isPalindrome2 = (x) => {
    // validation
    const reverseString = x.toString().split("").reverse().join("")
    return reverseString === x.toString()
}
// console.log(100000000000, isPalindrome2(100000000000))
// console.log(-121, isPalindrome2(-121))
