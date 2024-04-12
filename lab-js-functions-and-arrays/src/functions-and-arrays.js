// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(value1, value2) {

    if (value1 > value2) {
        return value1
    } else if (value2 > value1) {
        return value2
    } else {
        return value1
    }
}




// Iteration 2 | Find the Longest Word
function findLongestWord(wordsArray) {

    if (wordsArray.length === 0) {
        return null
    }

    let longestWord = ''

    wordsArray.forEach(function (eachWord) {
        if (eachWord.length > longestWord.length) {
            longestWord = eachWord
        }
    })

    return longestWord
}




// Iteration 3 | Sum Numbers
function sumNumbers(numbersArray) {

    let sum = 0

    numbersArray.forEach((eachNumber) => {
        sum += eachNumber
    })

    return sum
}



// Iteration 4 | Numbers Average
function averageNumbers(numbersArray) {

    if (numbersArray.length === 0) {
        return 0
    }

    const sum = sumNumbers(numbersArray)

    const average = sum / numbersArray.length

    return average
}





function doesWordExist(wordsArray, wordToSearch) {

    if (wordsArray.length === 0) {
        return null
    }

    let exists = false

    wordsArray.forEach(function (eachWord) {
        if (eachWord === wordToSearch) {
            exists = true
        }
    })

    return exists
}
