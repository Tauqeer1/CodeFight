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

let bestFriendNames = (name1, name2) => {
    let j = 1;
    for (let i = 97; i < 122; i++) {
        console.log('j', j)
        j++;
    }
    console.log('j', j);
    /* name1.map(a => {
        console.log('a', a);
    }) */
    return true || false;

}

console.log(bestFriendNames('abc', 'def'));