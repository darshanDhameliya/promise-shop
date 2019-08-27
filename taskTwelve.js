'use strict';

let q_io=require('q-io/http');

q_io.read('http://localhost:1337').then((result)=>{
    console.log(JSON.parse(result));
});