console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
    console.log('running hello:')
    return 'Hello World!';
}

// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
    console.log('Hello,', name + "!")

    return name;
}
helloName('Jo')
helloName('Stacy')

console.log(helloName('Kate'))


// Remember to call the function to test

let answer = 3
// 3. Function to add two numbers together & return the result

function addNumbers(firstNumber, secondNumber) {
    // return firstNumber + secondNumber;
    // let answer = firstNumber + secondNumber
    // console.log('add numbers:', answer)

    return firstNumber + secondNumber
}

console.log(addNumbers(1, 1))

// 4. Function to multiply three numbers & return the result
function multiplyThree(one, two, three) {
    return one * two * three

}
console.log('answer:', multiplyThree(1, 2, 3))

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
    if (number >= 0) {
        return true;
    } else return false
}

console.log('answer is:', isPositive(5))
console.log('answer is:', isPositive(-5))


// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

let lastItem = ['item1', 'item2']

function getLast(array) {
    if (array.length === 0) {

        return 'undefined'
    } else {
        return array[array.length - 1]
    }

}
console.log('running get last function', getLast(lastItem))

function fun(phi, kush, jon) {


    return phi + ' ' + kush + jon
}

console.log('call', fun('phi', 'kush', 'jon'))

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

let array = ['q', 'w', 'e', 'r', 't', 'y']
let value = 'q'



function find(value, array) {
    for (item in array) {
        if (array[item] === value)
            return true

        else {
            return false
        }
    }

}


console.log('for loop to find value', find(value, array))


function check(value, array) {
    for (i = 0; i <= array.length; i++) {
        if (array[i] === value)
            return true

        else {
            return false
        }//end of else
    }//end of for loop
}//end function

console.log('second for loop', check(value, array))


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

let string = []

//console.log('check split', string.toString().split(''))


function isFirstLetter(letter, string) {
    if (letter === string.split('')[0])
        return true
    else {
        return false
    }

}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array

let number = []


function numbersArray(enterNumber) {
    number.push(enterNumber)
    return number
}//end entering numbers

function sumAll(number) {
    let sum = 0
    // TODO: loop to add items
    for (i = 0; i < number.length; i++)
        sum += number[i]
    return sum;
}//end sumAll function

numbersArray(1)
numbersArray(2)
numbersArray(3)

console.log('Numbers in the "number" array:', number)
console.log('Sum of "number" array:', sumAll(number))

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

const inputArray = [-2, -3, 0, -4, -2, 1]

function positive(inputArray) {
    let newArray = []
 
    for (i = 0; i <= inputArray.length; i++) {


        if (inputArray[i] >= 0){

            let num = inputArray[i]

         newArray.push(num)
        }
       
    }
    
return newArray
}
console.log('check inputArray', positive(inputArray))


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!