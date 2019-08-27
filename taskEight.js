'use strict';

function attachTitle(firstargument){
    return 'DR. '+firstargument;
}

let promise=new Promise((fulfill,reject)=>{
    fulfill('MANHATTAN');
});

promise.then(attachTitle).then(console.log);