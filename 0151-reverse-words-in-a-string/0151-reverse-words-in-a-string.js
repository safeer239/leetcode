/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let stack=[]
    let splitString=s.split(" ")
    for (let i of splitString){
        stack.push(i)
    }
    let res=""
    while(stack.length){
        let current =stack.pop()
        if(current){
            res+= " " + current
        }
    }
    return res.trim()
};