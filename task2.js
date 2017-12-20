/* 
Given the string, check if it is a palindrome.

Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true.
Input/Output

[time limit] 4000ms (js)

[input] string inputString

A non-empty string consisting of lowercase characters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 105.

[output] boolean

true if inputString is a palindrome, false otherwise.

*/

/* My Solution */

/* Manually reverse the string */
/* 

// Covert string to array
let stringToArray = (str) => {
    let strArray = [];
    for (let i = 0; i < str.length; i++) {
        strArray.push(str[i]);
    }
    return strArray;
}

// Reverse the string
let reverseString = (str) => {
    let reverseString = [];
    for (let i = stringToArray(str).length - 1; i >= 0; i--) {
        reverseString.push(strArray[i]);
    }
    return reverseString.join('');
}
console.log(reverseString('abcdefghijklmnopqrstuvwxyz')); 

*/

let checkPalindrome = (inputString) => {
    return inputString.length <= 10 ? (inputString === reverseString(inputString)) ? true : false : 'Input string is longer';
};

let reverseString = (str) => {
    return str.split('').reverse().join('');
};
console.log(checkPalindrome('abc'));


/* Other's solution */

function checkPalindrome1(inputString) {
    return inputString == inputString.split('').reverse().join('');
}

function checkPalindrome2(inputString) {
    return [...inputString].reverse().join('') === inputString
}