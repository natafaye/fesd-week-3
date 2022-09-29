// I accidentally named this file codwars instead of codewars and I liked it so much I'm leaving it




/**** Disemvowel Trolls ****/
// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

const VOWELS = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

function disemvowel(str) {
    return str
        .split("") // turn string into array
        .filter(character => !VOWELS.includes(character))
        //.filter(character => character.toLowerCase() !== "a" && character.toLowerCase() !== "e" &&  character.toLowerCase() !== "i" && character.toLowerCase() !== "o" && character.toLowerCase() !== "u")  
        .join("")
}




/**** Square Every Digit ****/
// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num) {
    return parseInt(num.toString()
        .split("")
        .map(num => num * num)
        .join(""))
}




/***** Vaporwars *****/
// https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/javascript


// Go forth and try to solve it! :)