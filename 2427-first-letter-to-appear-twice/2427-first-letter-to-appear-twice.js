/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
      let count=new Set()
    for(let i =0;i<s.length;i++){
        if(count.has(s[i])){
            return s[i]
        }else{
            count.add(s[i])
        }
    }
    return result
};