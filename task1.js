/* 
Given a year, return the century it is in. The first century spans from the 
year 1 up to and including the year 100, the second - from the year 101 up to 
and including the year 200, etc.

Example

For year = 1905, the output should be
centuryFromYear(year) = 20;
For year = 1700, the output should be
centuryFromYear(year) = 17.


Input/Output
[time limit] 4000ms (js)
[input] integer year
A positive integer, designating the year.

Guaranteed constraints:
1 ≤ year ≤ 2005.
[output] integer
The number of the century the year is in.

*/
// My solution
function centuryFromYear(year) {
    return (year >= 1 && year <= 2005) ? year % 100 == 0 ? year / 100 : parseInt((year / 100) + 1) : 'year not in range !';
}
console.log(centuryFromYear(1900));


// Other's solution
function centuryFromYear1(year) {
    return Math.ceil(year / 100)
}
console.log(centuryFromYear1(1900));


function centuryFromYear2(year) {
    return Math.floor((year - 1) / 100) + 1;
}
console.log(centuryFromYear2(1900));

centuryFromYear3 = y => (y - 1) / 100 + 1 | 0;
console.log(centuryFromYear3(1900));

function centuryFromYear4(year) {
    return ~~((year - 1) / 100) + 1
}
console.log(centuryFromYear4(1900));


// 100 years = 1 century;
//  1 year = 1/100 century;
//1 ≤ year ≤ 2005 constraints