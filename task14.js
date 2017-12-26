/* 
Given a string that presents an arithmetic predicate that may consist
"*, +, -, /, (, )" and digits (0 to 9).
The predicate has only one equals sign "=".

Note 1: operator precedence is important!

Note 2: all numbers in the predicate are initially less than 10 and non-negative!

Write a function that takes that string and tells if it is correct or not!

Example

For predicate = "( 3 * ( 7 - 1 ) - 6 ) / 3 = 4" , the output should be
arithmeticPredicate(predicate) = true.

For predicate = "1 + 4 = 2 * 3", the output should be
arithmeticPredicate(predicate) = false.

[execution time limit] 4 seconds (js)

[input] string predicate

A string of a valid arithmetic predicate in a line that each of numbers and operators and parentheses separated with one space.
there are no spaces at the start and the end of the string.

Guaranteed constraints:
3 ≤ predicate.length ≤ 70.

[output] boolean

True if the given predicate is correct, False otherwise.

*/

/* My Solution */
let arithmeticPredicate = (predicate) => eval(predicate.split('=')[0]) === eval(predicate.split('=')[1]);
console.log(arithmeticPredicate('1 + 4 = 2 * 3'));