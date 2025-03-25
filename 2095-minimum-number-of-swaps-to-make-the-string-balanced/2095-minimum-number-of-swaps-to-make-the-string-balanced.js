/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let stack=0
for(let i=0;i<s.length;i++) {
  if(s[i]==='['){
    stack++
  }else if(stack>0){
    stack--
  }
}
return Math.floor((stack+1)/2)
};