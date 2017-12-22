/* 
Given a list of strings g and an integer z, sort the strings by the zth 1-based character 
ignoring the characters' case.
In case of a tie, the first element that appears in g should go first.
Example
For g = ["Cow", "Chicken", "Deer", "Rabbit"] and z = 3,
the output should be
sortByZ(g, z) = ["Rabbit", "Deer", "Chicken", "Cow"].
Input/Output
[time limit] 4000ms (js)
[input] array.string g
A list of strings.
Guaranteed constraints:
3 ≤ g.length ≤ 50,
2 ≤ g[i].length < 40.
[input] integer z
Sort the list based on the zth character.
Guaranteed constraints:
 1 ≤ z ≤ length of the shortest string in g.
[output] array.string
The sorted list.
 */

/* My Solution */
// Passed sample test, but failed to pass hidden test
let sortByZ = (g, z) => {
    z -= 1;
    return g.sort((a, b) => a.charCodeAt(z) - b.charCodeAt(z));
};
// console.log(sortByZ(["Cow", "Chicken", "Deer", "Rabbit"], 3));

/* Other's solutions */
i = 9
SortByZ = (g, z) => {
    g.map(w => {
        console.log('w', w);
        console.log('Buffer(w)', Buffer(w));
        console.log('wz', Buffer(w)[z - 1]);
        console.log('wz1', [Buffer(w)[z - 1] & 95, ++i, w]);
        [Buffer(w)[z - 1]]
    })
    return g.map(w => [Buffer(w)[z - 1] & 95, ++i, w]).sort().map(a => a[2])
}

// console.log(SortByZ(["Cow", "Chicken", "Deer", "Rabbit"], 3));

let str = 'Cow';
let z = 3;
// console.log('Buffer(str)', Buffer('abc'));
// console.log('z', z);
// console.log('Buffer(str)[z]', Buffer('abc')[0]);
let newBuffer = Buffer(str);
// console.log('newBuffer', newBuffer);
// console.log('newBuffer', typeof newBuffer);

let str1 = 'abcdefghijklmnopqrstuvwxyz';
let str2 = 'def';

// console.log(Buffer('b')[0] - 97);
// console.log(Buffer(str1)[3] % 32);
str1.split('').map(ch => Buffer(ch)[0] - 96);
// console.log(str1.map(ch => Buffer(ch)[0] - 97));

let st = 'Abc';
let st1 = 'Abc';
let name1 = "Bob", name2 = "Dan";
console.log('Buffer(st)', eval(Buffer(name1.toLowerCase()).join('+')));
console.log('Buffer(st)', eval(Buffer(name2.toLowerCase()).join('+')));