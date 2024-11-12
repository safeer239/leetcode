/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let count=[]
    for(let i=0;i< moves.length;i++){
        count[moves[i]]=(count[moves[i]]||0)+1
    }
    return count['U']==count['D'] && count['R']==count['L']
};