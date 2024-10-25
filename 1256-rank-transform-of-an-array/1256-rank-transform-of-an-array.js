/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let arr1=arr.slice().sort((a,b)=>a-b)
    let rankMap=new Map()
    let rank=1
    for(let i =0;i<arr1.length;i++){
        if(!rankMap.has(arr1[i])){
            rankMap.set(arr1[i],rank++)
        }
    }
    return arr.map(item=>rankMap.get(item))    
};