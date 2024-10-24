/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let r=0
    let l=0
    let underScore=0
    for(let i=0;i<moves.length;i++){
        if(moves[i]==='R') r++
        else if(moves[i]==='L') l++
        else underScore++
    }
    return (Math.abs(r-l))+underScore
};