/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    arr=s.split(" ")
    if(arr.length>k){
        return arr.slice(0,k).join(" ")
    }
    else return s
};