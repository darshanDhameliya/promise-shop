function parsePromised() {
    return new Promise((fulfill,reject)=>{
        try{
            fulfill(JSON.parse(process.argv[2]));
        }
        catch(e){
            reject(e);
        }
    });
}

function onFulfill(result){
    console.log(result);
}

function onReject(error){
    console.log(error.message);
}
parsePromised().then(onFulfill,onReject);