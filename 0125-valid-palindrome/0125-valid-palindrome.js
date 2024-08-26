/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    replaced= s.toLowerCase().replace(/[^a-z0-9]/g, '')
    return  replaced===replaced.split("").reverse().join("")
};

