'use strict';

first().then((result)=>{
    return second(result);
}).then((result)=>{
    console.log(result);
});