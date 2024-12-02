/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let elements=new Map()
    for(let i=0;i<arr.length;i++){
        elements.set(arr[i],i)
    }
    for(let i=0;i<arr.length;i++){
        if(elements.has(arr[i]*2) && elements.get(arr[i]*2) !==i){
            return true
        }
    }
    return false
};