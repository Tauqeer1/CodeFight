/*
Map the given integer to a month.

Example

For mo = 1, the output should be
getMonthName(mo) = "Jan";
For mo = 0, the output should be
getMonthName(mo) = "invalid month".
Input/Output
[time limit] 4000ms (js)
[input] integer mo
A non-negative integer.
Guaranteed constraints:
0 ≤ mo ≤ 15.
[output] string
A 3-letter abbreviation of month number mo or "invalid month" if the month doesn't exist.
Here are abbreviations of all months:
 */

/* My solution */
let getMonthName = (mo) => {
    let monthArr = [null, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return mo > 0 && mo <= 12 ? monthArr[mo] : 'invalid month';
}

getMonthName1 = m => m > 0 && m <= 12 ? new Date(0, m - 1).toString().slice(4, 7) : 'invalid month';
console.log(getMonthName1(0));

/* Other's Solution */

getMonthName2 = m => m % 13 ? `${new Date(0, m - 1)}`.slice(4, 7) : "invalid month"

getMonthName3 = m => m % 13 ? (new Date([m]) + 0).split` `[1] : 'invalid month'

