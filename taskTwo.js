'use strict';
require('es6-promise');

let promise=new Promise((fulfill,reject)=>{
    setTimeout(()=>{
        fulfill('FULFILLED!');
    },300);
});

promise.then((fullfill)=>{
        console.log(fullfill);
});