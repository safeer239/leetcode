/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for(let i of magazine){
        ransomNote=ransomNote.replace(i,"")
    }
    return ransomNote.length===0?true:false
};