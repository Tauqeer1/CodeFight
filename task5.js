let makeConsecutive2 = (array) => {
    let count = 0;
    let sortedArray = array.sort((a,b) => { return a - b; });
    console.log('sortedArray', sortedArray);
    let min = sortedArray[0];
    let max = sortedArray[array.length-1];
    console.log('min',min);
    console.log('max', max);
    count = max - min + 1 - sortedArray.length;
    return count;
};
console.log(makeConsecutive2([4,2,7,18]));
