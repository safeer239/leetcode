/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve,reject)=>{
        let result=[]
        let pending=functions.length
        functions.forEach((fn,index)=>{
            fn().then((value)=>{
                result[index]=value
                pending--;
                if(pending===0){
                    resolve(result)
                }
            }).catch(err=>{
                reject(err)
            })         
        })

    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */