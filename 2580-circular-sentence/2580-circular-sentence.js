/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    let s=sentence.split(" ")
    for(let i= 0;i<s.length-1;i++){
        if(s[i].slice(-1) !==s[i+1][0]){
            return false
        }
    }
    if(s[s.length-1].slice(-1)!== s[0][0]){
        return false
    }
    return true
};