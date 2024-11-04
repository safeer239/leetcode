/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let sum=0
    for(let i =0;i<salary.length;i++){
        sum+=salary[i]
    }
    let maxSal=Math.max(...salary)
    let minSal=Math.min(...salary)
    let average=(sum-(maxSal+minSal))/(salary.length-2)
    return average
};