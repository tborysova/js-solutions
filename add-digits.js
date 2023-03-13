/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    if (num < 10) {
        return num;
    }
    let result = 0;
    let arr = num.toString().split("");
    for (let num of arr) {
        result += parseInt(num);
    }
    return addDigits(result);
};