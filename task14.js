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


/* Other's Solution */

/* var applyOp = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '*': function (x, y) { return x * y },
    '/': function (x, y) { return x / y },
};
function hasGreaterPrecedence(op1, op2){
    if ((op1 == '*' || op1 == '/') && (op2 == '+' || op2 == '-'))
        return true;
    else if ((op1 == '+' || op1 == '-') && (op2 == '+' || op2 == '-'))
        return true;
    else if ((op1 == '*' || op1 == '/') && (op2 == '*' || op2 == '/'))
        return true;
    else
        return false;
}
function evaluate(expr){
    var values = [];
    var ops = [];
    for (var i=0; i<expr.length; i++){
        if (expr[i] == ' '){
            continue;
        }
        else if (expr[i] >= '0' && expr[i] <= '9'){
            var num = expr[i++];
            while (expr[i] >= '0' && expr[i] <= '9'){
                num += expr[i]
                i++;
            }
            i--;
            values.push(parseInt(num));
        }
        else if (expr[i] == '('){
            ops.push(expr[i]);
        }
        else if (expr[i] == ')'){
            while (ops.length >= 1 && ops[ops.length-1] != '('){
                var b = values.pop();
                var a = values.pop();
                values.push(applyOp[ops.pop()](a, b));
            }
            ops.pop();
        }
        else if (applyOp.hasOwnProperty(expr[i])){
            while (ops.length >= 1 && hasGreaterPrecedence(ops[ops.length-1], expr[i])){
                var b = values.pop();
                var a = values.pop();
                values.push(applyOp[ops.pop()](a, b));
            }
            ops.push(expr[i]);
        }
    }
    while (ops.length >= 1){
        var b = values.pop();
        var a = values.pop();
        values.push(applyOp[ops.pop()](a, b));
    }
    var k = values.pop();
    return k;
}

function arithmeticPredicate1(predicate) {
    var exprs = predicate.split("=");
    if (exprs.length != 2){
        return false;
    }
    try {
        return Math.round(evaluate(exprs[0]) * 10000000)/10000000 == Math.round(evaluate(exprs[1]) * 10000000)/10000000 ;
    }catch (e) {
        return False;
    }
    
} */
