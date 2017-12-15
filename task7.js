/*
One of your friends noticed that you could enumerate the alphabet and sum the letters of your name to get a number.
For example, if your name is Diego, your number would be 4 + 9 + 5 + 7 + 15 = 40.
She also notices that most names have different numbers, but there are some names that 
have the same sum, like Bob and Dan. Your friend is convinced that if two people have 
the same same sum, they are destined to be best friends.
Now, your friend doesn't like adding too much, and has asked you to write a function 
that takes two names and tells if they are destined to be best friends or not.
Note that names can contain spaces, that should be ignored.

Example
For name1 = "Bob" and name2 = "Dan", the output should be
bestFriendNames(name1, name2) = true.

Input/Output

[time limit] 4000ms (js)

[input] string name1

Name of the first person.

Guaranteed constraints:
1 ≤ name1.length ≤ 1000.

[input] string name2

Name of the second person.

Guaranteed constraints:
1 ≤ name2.length ≤ 1000.

[output] boolean

True if both names have the same sum, false otherwise. 
 */

//  Diego = 4 + 9 + 5 + 7 + 15
//  Bob = 2 + 15 + 2
//  Dan = 4 + 1 + 14

//  Bob =  98 + 111 + 98 = 307
//  Dan = 100 + 97 + 110 = 307

// a = 1
// z = 26

/* let f = a => {
    console.log('a1', a);
    return eval(Buffer(a).join`%32+`)
};

let bestFriendNames = (a, b) => {
    console.log('a', a)
    console.log('b', b);
    return f(a) === f(b)
};

console.log(bestFriendNames('Bob', 'Dan')); */

// console.log(Buffer('Bob').join('+'));

let bf = (name1, name2) => {
    name1 = name1.toLowerCase().replace(/\s/g, '');
    name2 = name2.toLowerCase().replace(/\s/g, '');

    name1 = Buffer(name1).join('+');
    name2 = Buffer(name2).join('+');

    name1 = name1.split('+');
    name2 = name2.split('+');
    let totalCountName1 = 0;
    let totalCountName2 = 0;
    name1.map(n => {
        totalCountName1 += parseInt(n);
    });

    name2.map(n => {
        totalCountName2 += parseInt(n);
    })
    console.log('totalCountName1', totalCountName1);
    console.log('totalCountName2', totalCountName2);



    console.log('name1', name1);
    console.log('name2', name2);

}
bf('          Bob                     ', 'dan');