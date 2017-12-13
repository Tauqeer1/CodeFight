/* 
    Copied solution
function makeArrayConsecutive2(statues) {
    var count = 0;
    var sortedArray = statues.sort((a, b) => a - b);

    return (sortedArray[sortedArray.length - 1] - sortedArray[0] + 1) - sortedArray.length;
}
makeArrayConsecutive2([6, 2, 3, 8])
 */

// Own solution
let makeConsecutive2 = (statues) => {
    let sortedStatues = statues.sort((a, b) => a - b);
    let count = 0, j = 0;
    for (let i = sortedStatues[0]; i <= sortedStatues[sortedStatues.length - 1]; i++) {
        if (sortedStatues[j] === undefined) {
            count++;
        }
        j++;
    }
    return count;
};
console.log(makeConsecutive2([4, 2, 7, 18]));

