/* 
You were rummaging around your closet looking for pants when you fell into a time warp.
 Now you are back in highschool! You have to do your homework (again). Luckily, you 
 know how to do this stuff!
At the time, you were taking Algebra. You are too lazy to do the work out a second time,
 so you write a program to do it for you.
Your assignment is simple. You are working with quadratics and must solve for "x".
Given an array coefficients, return an array of answers in increasing order, rounded to
 the nearest hundredths place.

Example
For coefficients = [1, -4, 4], the output should be 
highschoolThrowback(coefficients) = [2].

Input/Output

[time limit] 4000ms (js)

[input] array.float coefficients

Guaranteed constraints:
coefficients.length = 3,
-105 ≤ coefficients[i] ≤ 105.

[output] array.float

An array of answer(s), sorted and rounded to the nearest hundredths.
*/

let highschoolThrowback = (coefficients) => {
    let x1 = (- 1 * coefficients[1] + Math.sqrt(Math.pow(coefficients[1], 2) - (4 * coefficients[0] * coefficients[2]))) / (2 * coefficients[0]);
    let x2 = (- 1 * coefficients[1] - Math.sqrt(Math.pow(coefficients[1], 2) - (4 * coefficients[0] * coefficients[2]))) / (2 * coefficients[0]);
    x1 = Math.round(x1 * 100) / 100;
    x2 = Math.round(x2 * 100) / 100;
    if (x1 === x2) {
        return [x1];
    }
    return [x2, x1];
}
console.log(highschoolThrowback([7.25, 16.78, 8.91]));