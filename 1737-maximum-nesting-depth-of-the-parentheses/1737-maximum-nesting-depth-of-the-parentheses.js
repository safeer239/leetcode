/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count=0
    let arr=[]
    for(let i of s){
        if(i=="("){
            arr.push(i)
        }
        else if(i==")"){
            count=arr.length>count?arr.length:count
            arr.pop()
        }
    }
    return count
};