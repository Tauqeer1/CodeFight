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

/* My Solution */
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
// console.log('a', highschoolThrowback([7.25, 16.78, 8.91]));

// -b + ~/b^2 - 4ac / 2a , -b - ~/b^2 - 4ac / 2a
/* Other's solution */
highschoolThrowback1 = ([a, b, c]) => {
    return (b /= -a * 2, c = Math.pow((b * b - c / a), .5)) ? [b - c, b + c]
        .map(n => n.toFixed(2)) : [b];
}

// console.log('b', highschoolThrowback1([7.25, 16.78, 8.91]));

highschoolThrowback2 = ([a, b, c]) => {
    let b1 = b / (-a * 2);
    b /= -a * 2;
    let c1 = Math.sqrt()
    c = Math.pow((b * b - c / a), .5);

    console.log('b', b);
    console.log('c', c);
    /* [b - c, b + c].map(n => {
        console.log('n', n);
    }) */
    return (b, c) ? [b - c, b + c].map(n => n.toFixed(2)) : [b];
}

console.log('c', highschoolThrowback2([7.25, 16.78, 8.91]));

highschoolThrowback3 = ([a, b, c]) => [
    o = (b /= 2 * a) + Math.pow((d = b * b - c / a), .5),
    ...d ? [c / a / o] : []
].map(x => -x.toFixed(2));

// console.log('c', highschoolThrowback3([7.25, 16.78, 8.91]));