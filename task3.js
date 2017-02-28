let adjacentElementProduct = (inputArray) => {
    if(!inputArray.length >= 2 && !inputArray.length <= 10){
        return 'Array length should be in between 2 and 10';
    }
    let result = inputArray[0] * inputArray[1];
    for(let i = 0; i < inputArray.length; i++){
        if(!Number.isInteger(inputArray[i]) && !(inputArray[i] >= -50 && inputArray[i] <= 1000)){
            return 'Number is not in range and number should be integer';
        }
        let res = inputArray[i] * inputArray[i+1];
        if(res > result){
            result = res;
        }
    }
    return result;
};
let array = [-1,-1,-1,-2];
let result = adjacentElementProduct(array);
console.log('result', result);