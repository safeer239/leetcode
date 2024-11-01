/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let newArray=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            newArray.push(...[0,0])
        }else{
            newArray.push(arr[i])
        }
    }
        for(let i=0;i<arr.length;i++){
            arr.shift()
            arr.push(newArray[i])
        }
};