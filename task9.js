/* 

Given an array a that contains only numbers in the range from 1 to 
a.length, find the first duplicate number for which the second occurrence 
has the minimal index. In other words, if there are more than 1 duplicated numbers, 
return the number for which the second occurrence has a smaller index 
than the second occurrence of the other number does. If there are no such 
elements, return -1.

Example
        [0, 1, 2, 3, 4, 5] = indexes
For a = [2, 3, 3, 1, 5, 2], the output should be
firstDuplicate(a) = 3.

There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller 
index than than second occurrence of 2 does, so the answer is 3.

For a = [2, 4, 3, 5, 1], the output should be
firstDuplicate(a) = -1.

Input/Output

[time limit] 4000ms (js)

[input] array.integer a

Guaranteed constraints:
1 ≤ a.length ≤ 105,
1 ≤ a[i] ≤ a.length.

[output] integer

The element in a that occurs in the array more than once and has the minimal index 
for its second occurrence. If there are no such elements, return -1.

*/


/* let firstDuplicate = (arr) => {
    let firstDuplicateNumber = -1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && firstDuplicateNumber === -1) {
                firstDuplicateNumber = arr[i];
                break;
            }
        }
    }
    return firstDuplicateNumber;
}

console.log(firstDuplicate([2, 3, 3, 1, 5, 2])); */
/* Not solved */
let firstDuplicate = (arr) => {
    // console.log('arr', arr);
    let firstDuplicateNumber = -1;
    for (let i = 0; i < arr.length; i++) {
        console.log('i = ', i);
        console.log('arr[' + i + '] = ', arr[i]);
        console.log('arr[Math.abs(' + arr[i] + ')] =', arr[Math.abs(arr[i])]);
        if (arr[Math.abs(arr[i])] >= 0) {
            arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])];
            console.log('arr[Math.abs(arr[i])] if', arr[Math.abs(arr[i])]);
        } else {
            firstDuplicateNumber = Math.abs(arr[i]);
            console.log('firstDuplicateNumber', firstDuplicateNumber);
            break;
        }
        console.log('arr', arr);
    }
    return firstDuplicateNumber;
}
console.log(firstDuplicate([2, 2]));

// arr[0] = 2