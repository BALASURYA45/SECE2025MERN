/*function promiseEg(flag){
    return new Promise(function(resolve, reject) {
        if(flag===1){
            resolve("This is a resolve promise")
        }else if(flag===0){
        reject("This is a promise")
        }
    })
}

promiseEg(1).then((res)=>{
    console.log(res);
}).catch((rej)=>{
    console.log(rej);
})

//console.log(promiseEg(7))
*/

//Promise
//function promiseEg(flag){
//})

//promise-location finder example
//pass 2 things - Melboune,2000

locationFinder("Melbourne",2000)
locationFinder=(location,time)=>{
    return new Promise((locFound,locNotFound)=>{
        if(isLocationValid(location,time)){
                locFound(location,"Found in",time,"secs")
            }
        else{
                locNotFound(location,"Not Found",time,"secs")
            }
        })
}

function isLocationValid(loc,time){
    location=="Melbourne"
    t=2000
    if(loc ===location && time<=t){
        return true
    }
    else{
        return false
    }
}

locationFinder("Melbourne",2000).then((res)=>{
    console.log(result);
}).catch((rej)=>{
    console.log(err);
})