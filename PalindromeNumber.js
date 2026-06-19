
// is palindrome without converting it to the string
var isPalindrome = (inputNumber) => {
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
console.log(100000000000, isPalindrome(100000000000))
console.log(-121, isPalindrome(-121))




// palindrome for the string
var isPalindrome1 = (x) => {
    // validation
    const reverseString = x.toString().split("").reverse().join("")
    return reverseString === x.toString()
}
