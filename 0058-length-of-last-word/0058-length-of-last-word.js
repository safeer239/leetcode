/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    count=0
    char=false
    for(let i=s.length-1;i>=0;i--){
        if(s[i] !==' '){
            count++
            char =true
        }else if(s[i]==" " && char){
            return count
        }
    } 
    return count   
};