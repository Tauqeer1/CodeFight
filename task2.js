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

// Covert array to string
let arrayToString = (arr) => {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    return str;
}

// Reverse the string
let reverseString = (str) => {
    let reverseString = [];
    let strArray = stringToArray(str);
    for (let i = strArray.length - 1; i >= 0; i--) {
        reverseString.push(strArray[i]);
    }
    return arrayToString(reverseString);
}

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