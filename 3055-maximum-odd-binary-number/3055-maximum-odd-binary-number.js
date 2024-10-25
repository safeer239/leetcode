/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let one=0
    let zero=0
    for(let i=0;i<s.length;i++){
        if(s[i]=="1")one++
        else zero++
    }
    if(one==1){
        return "0".repeat(zero)+"1"
    }else{
        return "1".repeat(one-1)+"0".repeat(zero)+"1"
    }
};