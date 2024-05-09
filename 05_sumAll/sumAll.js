const sumAll = function(num1, num2) {
    if (
        typeof num1 !== "number" || 
        typeof num2 !== "number" ||
        num1 < 0 ||
        num2 < 0
    ) return "ERROR"
    let result = 0
    if (num1 < num2) { 
        for (; num1 <= num2; num1++) {
            result += num1
        }
        return result
    } else {
        for (; num2 <= num1; num2++) {
            result += num2
        }
        return result
    } 

};

// Do not edit below this line
module.exports = sumAll;
