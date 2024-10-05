/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let arr=[]
    words.forEach((word,i)=>{
        if(word.split('').includes(x)){
        arr.push(i)
        }
    })
    return arr
};