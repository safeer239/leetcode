/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let result =''
    let count=1
    for(let i= 1;i<word.length;i++){
        if(word[i]===word[i-1] && count<9){
            count++
        }else{
            result+=count+word[i-1]
            count=1
        }
    }
    result += count + word[word.length-1]
    return result
};