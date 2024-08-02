/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n==0){
        return arr
    }
    let newArray=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            newArray.push(...flat(arr[i],n-1))
        }
        else{
         newArray.push(arr[i])
        }
    }
    return newArray
}