/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred"
const s2 = "fed"
const s3 = "Ted"
const s4 = "bread"
const s5 = "and"

// Concatenate the string variables into one new string

const sumString = s1 + ' ' + s2 + ' ' + s3 + ' ' + s4 + ' ' + s5

console.log(sumString)

// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java"
const part2 = "script"

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


// Print the cameLtaiL-formatted string

const lastIndex1 = part1.length - 1
const lastIndex2 = part2.length - 1

const lastLetter1 = part1.charAt(lastIndex1).toUpperCase()
const lastLetter2 = part2.charAt(lastIndex2).toUpperCase()

const rest1 = part1.substring(0, lastIndex1)
const rest2 = part2.substring(0, lastIndex2)

const result1 = rest1 + lastLetter1
const result2 = rest2 + lastLetter2

console.log(result1)
console.log(result2)



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84

// Calculate the tip (15% of the bill total)

const totalTip = billTotal * .15

// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const randomResult = Math.random()
const maxResult = randomResult * 10
const upperMinimum = maxResult + 1
const roundedResult = Math.floor(upperMinimum)



// Print the generated random number
console.log(roundedResult)



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true
const b = false

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b

const expression2 = a || b

const expression3 = !a && b

const expression4 = !(a && b)

const expression5 = !a || !b

const expression6 = !(a || b)

const expression7 = a && a