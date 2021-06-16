/* ************************************************************************************** */
/* Simple Example */
console.log("**********************************Closure Example******************************************* ")
const one = "One" // global scope

function outer1 (x) {
    const two = "two" // variable in the scope of function outer
    function inner () {
        const three = "three" // variable in the scope of function inner
        console.log(one)
        console.log(two)
        console.log(three)
        return x; // returning the argument passed to the outer function
    }
    return inner;
}

const innerFunction = outer1("outer argument")
console.log(innerFunction()) // Executing the inner function and printing the return value

/* ************************************************************************************** */


/* ************************************************************************************** */
// HOC Example 1 - Multiplier
console.log("**********************************HOC******************************************* ")

const assignFactor = (factor) => {
    return function multiply (num){
        return factor * num;
    }
}
const multiply2 = assignFactor(2) // Creating a function to multiply a number by 2
const multiply3 = assignFactor(3) // Creating a function to multiply a number by 3

console.log(multiply2(10)) // Trying to multiply 10 by 2
console.log(multiply3(10)) // Trying to multiply 10 by 3
/* ************************************************************************************** */


/* ************************************************************************************** */
// HOC Example 2 - Decimal places

const decimalPlaces = (places) => {
    // returning an anonymous function from the outer function that forms a closure 
    return (num) => { 
        // The argument of the ouer function would still be accessible inside the closure
        return num.toFixed(places);
    }
}

const fixedTo2Places = decimalPlaces(2) // Creating a function that fixes value to 2 decimal places 
const fixedTo4Places = decimalPlaces(4) // Creating a function that fixes value to 4 decimal places 
const integerValue = decimalPlaces(0) // Creating a function that returns an integer value

let value = 3.14167823;
console.log(fixedTo2Places(value)) // prints 3.14
console.log(fixedTo4Places(value)) // prints 3.1416
console.log(integerValue(value)) // prints 3

/* ************************************************************************************** */


/* ************************************************************************************** */
// Closure example to store the initial DOM styles

// Function getStyleManager accepts a selector as an argument
console.log("**********************************DOM Style initial State******************************************* ")
function getStyleManager(selector) {
    
    // The element is selected using the selector that is passed as an argument to the outer function
    const el = document.querySelector(selector)

    // Error check
    if(el === null) {
        throw new Error("Unable to select element")
    }

    // Storing the initial state in a variable defined in the outer function 
    const initialState = Object.assign({}, window.getComputedStyle(el))

    // returning an object with 2 functions that forms a closure with the getStyleManager function
    return {
        getInitialState: (property) => {
            return initialState[property] // Can access the getInitialState property of the outer function
        },
        updateStyleProp: (key, value) => {
            el.style[key] = value // Can access the el property of the outer function
        }
    }
}

// Initializing the outer function
const styleManager = getStyleManager(".sampleText")

// Printing the font-size before updating the style 
console.log("Before updating the style")
console.log(styleManager.getInitialState("fontSize"))
console.log(styleManager.getInitialState("color"))

// Making updates to the color and font size
styleManager.updateStyleProp("color", "rgb(255,0,0)")
styleManager.updateStyleProp("fontSize", "36px")

// Printing the initial values after making the style updates
console.log("Getting the initial style values even after updating")
console.log(styleManager.getInitialState("fontSize"))
console.log(styleManager.getInitialState("color"))
/* ************************************************************************************** */



/* ************************************************************************************** */
console.log("**********************************Singleton******************************************* ")
// Singletons
const greeting = (function () {
    const maleGreeting = "Hello Mr.";
    const femaleGreeting = "Hello Miss.";
    return {
        greetMale: (name) => {
            return `${maleGreeting} ${name}`
        },
        greetFemale: (name) => {
            return `${femaleGreeting} ${name}`
        }
    }
})() // IIFE - Immediately Invoked Function Expressions

console.log(greeting.greetFemale("Jane")) // Hello Miss. Jane
console.log(greeting.greetMale("John")) // Hello Mr. John

/* ************************************************************************************** */

/* ************************************************************************************** */
console.log("**********************************Data Hiding******************************************* ")
// Private Variables / Data Hiding in JavaScript
const privateFunction = () => {
    const privateText = "I'm private" // Private variable
    return {
        getPrivateText: () => {
            return privateText; // Closure has access to privateText
        }
    }
}

const text = privateFunction()
// Private variables are accessible outside the privateFunction only via closures
console.log(text.getPrivateText()) // I'm Private
/* ************************************************************************************** */


