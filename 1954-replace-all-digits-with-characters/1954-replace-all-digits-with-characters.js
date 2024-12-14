/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let result=""
    for(let i=0;i<s.length;i++){
        if(i&1){
            result+=String.fromCharCode(s[i-1].charCodeAt(0)+Number(s[i]))
        }
        else{
            result+=s[i]
        }
    }
    return result
};