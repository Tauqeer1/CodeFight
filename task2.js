let checkPalindrome = (inputString) => {
    return inputString.length <= 10 ? (inputString === reverseString(inputString)) ? true : false : 'Input string is longer';
};

let reverseString = (str) => {
    var splitStr = str.split("");
    var reverseArr = splitStr.reverse();
    return reverseArr.join("");
};
let res = checkPalindrome('aba');