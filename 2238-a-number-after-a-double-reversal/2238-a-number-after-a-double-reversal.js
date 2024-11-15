/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let reversed=parseInt(num.toString().split('').reverse().join(''))
    let doubleReverse=parseInt(reversed.toString().split('').reverse().join(''))
    return num==doubleReverse
};