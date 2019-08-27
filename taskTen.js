'use strict';

function alwaysThrows() {
    throw new Error('OH NOES');
}

function iterate(argument) {
    console.log(argument);
    return argument + 1;
}

Promise.resolve(1)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch((error)=>{
        console.log(error.message);
    })