/* 
Using the JavaScript language, have the 
function TimeConvert(num) take the num parameter being passed and return the number
 of hours and minutes the parameter converts to (ie. if num = 63 then the output should 
be 1:3). Separate the number of hours and minutes with a colon.  
*/

const timeConvert = (num) => {
    let hour = (num / 60).toString().split(".")[0];
    let min = ((num % 60).toString().length === 1) ? ('0' + (num % 60).toString()) : (num % 60).toString();
    let time = hour + ':' + min;
    return time;
}

console.log(timeConvert(60));

// 3 * 60 = 180 + 20