/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    let total=arr.reduce((a,b)=>a+b)
    let sum=0
    let part=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
        if(sum==total/3){
        part++
        sum=0
        }
    }
    return part>=3
};