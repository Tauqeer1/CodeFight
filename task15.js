/* 
I define a shortened string as a string after being shortened from a full-string 
(a full-string is a string just contains uppercase English letters) and it follows the 
rules:

Xm - The character X rewrites m times;
(S)m - The string S rewrites m times.
For example, "H3A" is a shortened string of "HHHA".
(HDL)5 is a shortened string of "HDLHDLHDLHDLHDL".
(AH0)2AD is a shortened string of "AAAD".
Given a shortened string, return its full-string.

Example
For ss = "KB2 (Y2F)2 B5A". the output should be
shortenedString(ss) = "KBBYYFYYFBBBBBA".

Input/Output

[execution time limit] 4 seconds (js)

[input] string ss

A string consisting of uppercase English letters (A, B, C,...,Z), numbers, whitespace 
characters and brackets. It is guaranteed that parentheses form a regular bracket sequence.

Guaranteed constraints:
1 ≤ ss.length ≤ 1000.

[output] string

A string just contains uppercase English letters. The whitespace characters is unnecessary in 
a full-string.

*/

/* My Solution */
/* Not solved */

let ss = 'A9(AB)';// (Y2F)2 B5A'; //KBBYYFYYFBBBBBA

// console.log('sss', ss.repeat(3));
// ss = ss.replace(/\s/g, '').split('');
// console.log('ss', ss);
let tempArr = [];
let arr = ss.replace(/\s/g, '');//.split('');

console.log('arr', arr.indexOf('('));
/* 
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0 && arr[i] <= 10) {
        tempArr.push(arr[i - 1].repeat(arr[i] - 1));
    } else {
        tempArr.push(arr[i]);
    }
}
// console.log('tempArr ', tempArr);
console.log('tempArr', tempArr.join('')); */

// console.log(ss.replace(/\s/g, ''));
let shortenedString = (ss) => {
    console.log('ss', ss);
}

