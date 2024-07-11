/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str=x.toString()
    let pal='';
    pal=str.split('').reverse().join('')
    if(x==pal){
        return true
    }else{
        return false
    }
};